const Employee = require('../models/employee.models');
const { hashPassword } = require('../utils/hash.utils');
const {validateEmployee} = require('../utils/validate.utils');

exports.createEmployee = async(req,res)=>{
    try {
        const {error}=validateEmployee(req.body);
        if(error){return res.status(406).send({Warning: error.details[0].message})}

        const newUser = await Employee.create(req.body);
        return res.status(201).send({Success : 'USER_CREATED_SUCCESSFULLY',newUser})
    } catch (err) {
        console.log(err);
        return
    }
}