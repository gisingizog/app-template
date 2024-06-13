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

exports.validateEmployee = (body)=>{
    const schema = Joi.object({
        firstName : Joi.string().min(4).required(),
        lastName : Joi.string().required(),
        national_ID: Joi.number().required(),
        phoneNumber : Joi.number().required(),
        emailAddress : Joi.string().email().required(),
        homeAddress : Joi.string().required(),
        department: Joi.string().required(),
        position: Joi.string().required()
    });
    return schema.validate(body);
}


