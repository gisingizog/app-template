const Joi = require('joi');

exports.validateUser = (body)=>{
   return Joi.object({
    username: Joi.string().max(20).min(4).required(),
    emailAddress : Joi.string().email().required(),
    password : Joi.string().min(6).required()
    }).validate(body);
}

exports.validateLogin = (body)=>{
    return Joi.object({
        emailAddress: Joi.string().email().required(),
        password: Joi.string().email().required()
    }).validate(body);
}


