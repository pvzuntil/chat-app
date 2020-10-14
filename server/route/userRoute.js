const router = require('express').Router()
const mres = require('../lib/MRes')
const mvalid = require('../lib/MValid')
const { userValidation, loginValidation } = require('../validation')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const UserModel = require('../model/UserModel')

router.post('/signup', async (req, res) => {

    let data = req.body

    let { error } = userValidation(data)
    if (error) {
        return res.status(200).send(mres(0, mvalid(error)))
    }

    let getEmail = await UserModel.findOne({
        email: data.email
    })
    if (getEmail) {
        return res.status(200).send(mres(0, 'Email sudah digunakan, silahkan coba yang lain !'))
    }

    let genSalt = await bcrypt.genSalt(10)
    let hashPass = await bcrypt.hash(data.password, genSalt)

    try {
        const user = UserModel({
            name: data.name,
            email: data.email,
            password: hashPass
        })
        let saveUser = await user.save()
        return res.status(200).send(mres(1, 'Berhasil mendaftar, silahkan login untuk melanjutkan !', saveUser))
    } catch (error) {
        return res.status(200).send(error)
    }
})

router.post('/login', async (req, res) => {
    let data = req.body

    let { error } = loginValidation(data)
    if (error) {
        return res.status(200).send(mres(0, mvalid(error)))
    }

    const getUser = await UserModel.findOne({
        email: data.email
    })

    if (!getUser) {
        return res.status(200).send(mres(0, 'Email or password are in correnct !'))
    }

    let comparePass = await bcrypt.compare(data.password, getUser.password)
    if (!comparePass) {
        return res.status(200).send(mres(0, 'Email or password are in correnct !'))
    }

    let genjwt = jwt.sign({
        id: getUser._id,
        name: getUser.name,
        email: getUser.email
    }, process.env.JWT_SECERT)

    return res.status(200).send(mres(1, 'Berhasil login !', {
        token: genjwt
    }))
})

module.exports = router