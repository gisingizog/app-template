const User = require('../models/user.model');
const {validateUser} = require('../utils/validate.utils');
const {hashPassword} = require('../utils/hash.utils');

exports.createUser = async(req,res)=>{
    let {emailAddress , password}  = req.body;
    try {
        const {error} = validateUser(req.body);
        if(error){return res.status(406).send({INPUT_WARNING: error.details})}

        password = await hashPassword(password);
        const newUser = await User.create(req.body);
        return res.status(201).send({Success: 'User created successfully;',data:newUser});

    } catch (err) {
        console.log(err);
    }
}