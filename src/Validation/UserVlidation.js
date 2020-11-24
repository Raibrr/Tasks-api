const joi = require('joi')

const user = joi.object({
    user_name: joi.string()
        .alphanum()
        .min(2)
        .max(30)
        .required(),
    email: joi.string()
        .email()
        .required(),
    password: joi.string()
        .alphanum()
        .min(6)
        .required(),
    repeat_password: joi.ref('password')
}).with('password', 'repeat_password').unknown();

exports.userValidation = (reqBodyUser) => user.validate(reqBodyUser)