const Joi = require('@hapi/joi')

const validation = {
    userValidation(data) {
        return Joi.object({
            name: Joi.string()
                .required()
                .min(3)
                .label('name'),
            email: Joi.string()
                .required()
                .email()
                .label('email'),
            password: Joi.string()
                .required()
                .min(6)
                .label('password')
        }).validate(data)
    }
}

module.exports = validation