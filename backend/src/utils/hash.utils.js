const bcrypt = require('bcrypt');
require('dotenv').config();

exports.hashPassword =async (password)=>{
    const salt  =await bcrypt.genSalt(10);
    const hashedPassword  = bcrypt.hash(password,salt);
    return hashedPassword;
}