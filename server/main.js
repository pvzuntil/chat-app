const express = require('express')
const app = express()
const mres = require('./lib/MRes')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const userRoute = require('./route/userRoute')

dotenv.config()

const mongoConf = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(process.env.MONGO_URL, mongoConf, () => {
    console.log('KONEKSI ON');
})


app.use(express.json())
app.get('/', (_req, res) => {
    return res.send(mres(1, 'Server Aktif'))
})
app.use('/user', userRoute)

app.listen('3000', () => {
    console.log('SERVER LIVE !');

})