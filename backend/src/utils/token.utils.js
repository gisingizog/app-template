const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
require('dotenv').config();

exports.generateAuthToken = (user)=>{
    const timeInSec = parseInt(process.env.JWT_EXPIRES_IN) /1000;
    console.log(timeInSec);
    const token = jwt.sign({id:user.user_ID},process.env.JWT_SECRET_KEY,{expiresIn:process.env.JWT_EXPIRES_IN});
    return token;
}