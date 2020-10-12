const router = require('express').Router()
const mres = require('../lib/MRes')
const mvalid = require('../lib/MValid')
const { userValidation } = require('../validation')

const UserModel = require('../model/UserModel')

router.post('/signup', async (req, res) => {

    let data = req.body

    let {error}= userValidation(data)
    if(error){
        return res.status(400).send(mres(0, 'Validasi gagal !', mvalid(error)))
    }

    let getEmail = await UserModel.findOne({
        email: data.email
    })
    if (getEmail) {
        return res.status(200).send(mres(0, 'Email sudah digunakan, silahkan coba yang lain !'))
    }

    try {
        const user = UserModel({
            name: data.name,
            email: data.email,
            password: data.password
        })
        let saveUser = await user.save()
        return res.status(200).send(mres(1, 'Berhasil menambah user', saveUser))
    } catch (error) {
        return res.status(400).send(error)
    }
})

router.post('/login', (req, res) => {
    return res.send(mres(1, 'login'))
})

module.exports = router