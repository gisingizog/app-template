const User = require('../models/user.model');
const {validateUser, validateLogin} = require('../utils/validate.utils');
const {hashPassword} = require('../utils/hash.utils');
const { generateAuthToken } = require('../utils/token.utils');
const bcrypt = require('bcrypt');

exports.createUser = async(req,res)=>{
    try {
        const {error} = validateUser(req.body);
        if(error){return res.status(406).send({INPUT_WARNING: error.details[0].message})}

        req.body.password = await hashPassword(req.body.password);
        const newUser = await User.create(req.body);
        return res.status(201).send({Success: 'User created successfully;',data:newUser});

    } catch (err) {
        console.log(err);
    }
}

exports.getAllUsers = async(req,res)=>{
    try {
        const users=await User.findAll();
        if(users.length === 0){return res.status(404).send({Message:'NO_USERS_FOUND'})}
        return res.status(200).send({Success: 'USERS_FOUND',users});
    } catch (err) {
        console.log(err);
    }
}

exports.getByID = async(req,res)=>{
    try {
        const user = await User.findOne({where : {user_ID:req.params.id}});

        if(!user){return res.status(404).send({Message:'USER_NOT_FOUND'})};
        return res.status(200).send({Success:'USER_FOUND',Data:user});
    } catch (err) {
        console.log(err)
    }
}

exports.login = async(req,res)=>{
    try {
        const { error } = validateLogin(req.body);
        if(error){return res.status(406).send({VALIDATION_ERROR: error.details[0].message})}

        const user = await User.findOne({where: {emailAddress:req.body.emailAddress}});
        console.log(user);
        if(!user){return res.status(404).send({Warning:'Incorrect email'})}


        const passwordExists =await bcrypt.compare(req.body.password,user.password);
        if(!passwordExists){return res.status(404).send({Warning: 'Incorrect password'})};

        const token = generateAuthToken(user);
        console.log(token);
        return res.status(200).json({token})
    } catch (err) {
        console.log(err);
    }
}

exports.updateUser = async (req, res) => {
    const { emailAddress, password } = req.body;
    
    try {
      const { error } = validateUser(req.body);
      if (error) {
        return res.status(406).send({ Warning: error.details[0].message });
      }
  
      const affectedRows = await User.update(req.body, { where: { user_ID: req.params.id } });
      console.log("Affected Rows:", affectedRows);
  
      if (affectedRows === 0) {
        return res.status(404).send({ Message: 'USER_NOT_FOUND_NOR_UPDATED' });
      }
  
      const updatedUser = await User.findOne({ where: { user_ID: req.params.id } });
      return res.status(200).send({
        Message: 'USER_UPDATED_SUCCESSFULLY',
        Data: updatedUser
      });
  
    } catch (err) {
      console.error(err);
      return res.status(500).send({ Message: 'INTERNAL_SERVER_ERROR' });
    }
  };
  

exports.deleteUser = async(req,res)=>{
    try {
        const deleted = await User.destroy({where:{user_ID:req.params.id}});
        if(deleted){return res.status(200).send({
            Success: 'USER_DELETED_SUCCESSFULLY'
        })}
        return res.status(400).send({Message:'USER_NOT_FOUND'})
    } catch (err) {
        console.log(err)
    }
    
}
