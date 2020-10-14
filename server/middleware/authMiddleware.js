const jwt = require('jsonwebtoken')
const mres = require('../lib/MRes');

module.exports = function (req, res, next) {
    let header = req.headers;
    let token = header.auth_token

    if(!token){
        return res.status(200).send(mres(99, 'Unauthorized !'))
    }
    
    try {
        let checkToken = jwt.verify(token, process.env.JWT_SECERT)
        req.currentUser = checkToken
        return next()
    } catch (error) {
        return res.status(200).send(mres(99, 'Unauthorized !'))
    }
}