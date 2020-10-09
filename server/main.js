const express = require('express')
const app  = express()
const mres = require('./lib/MRes')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

app.use(express.json())

const mongoConf = {
    useNewUrlParser: true,
}
mongoose.connect(process.env.MONGO_URL, mongoConf,()=>{
    console.log('KONEKSI ON');
})

app.get('/', (_req, res)=>{
    return res.send(mres(1, 'Server Aktif'))
})

app.listen('3000', ()=>{
    console.log('SERVER LIVE !');
    
})