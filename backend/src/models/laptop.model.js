const {sequelize} = require('../config/db.config');
const {DataTypes} = require('sequelize');

const Laptop = sequelize.define('laptops',{
    manufacturer : {
        type: DataTypes.STRING,
        allowNull: false
    },
    model:{
        type: DataTypes.STRING,
        allowNull: false
    },
    serial_No : {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

(async()=>{
    try {
        await Laptop.sync();
        console.log('Laptops Table created successfully');
    } catch (error) {
        console.log(error)
    }
})

module.exports = Laptop