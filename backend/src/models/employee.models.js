const {sequelize} = require('../config/db.config');
const {DataTypes} = require('sequelize');

const Employee = sequelize.define('employees',{
    employee_ID:{
        type: DataTypes.INTEGER,
        allowNull : false,
        primaryKey : true,
        autoIncrement : true
    },
    firstName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName:{
        type:DataTypes.STRING,
        allowNull: false
    },
    national_ID:{
        type: DataTypes.INTEGER,
        allowNull:false,
        unique:true
    },
    phoneNumber:{
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    emailAddress:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    homeAddress:{
        type: DataTypes.STRING,
        allowNull:false
    },
    department:{
        type: DataTypes.STRING,
        allowNull: false
    },
    position:{
        type: DataTypes.STRING,
        allowNull: false
    }
});

(async ()=>{
    try {
        await Employee.sync();
        console.log('Employee Table Created');
    } catch (error) {
        console.log(error);
    }
})();

module.exports = Employee;