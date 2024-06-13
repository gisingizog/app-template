const bcrypt = require('bcrypt');
require('dotenv').config();
const saltRounds = parseInt(process.env.SALT_ROUNDS)
exports.hashPassword =async (password)=>{
    try {
        const salt  =await bcrypt.genSalt(saltRounds);
        const hashedPassword  = await bcrypt.hash(password,salt);
        return hashedPassword;
    } catch (error) {
        console.log("Error hashing the password",error)
    }
}