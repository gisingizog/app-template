const Joi = require('joi');

exports.validateUser = (body)=>{
   return Joi.object({
    emailAddress : Joi.string().email().required(),
    password : Joi.string().min(6).required()
    }).validate(body);
}

exports.validateLogin = (body)=>{
    return Joi.object({
        emailAddress: Joi.string().email().required(),
        password: Joi.string().required()
    }).validate(body);
}


