const {sequelize} = require('../config/db.config');
const {DataTypes} = require('sequelize');

const User = sequelize.define('users',{
    user_ID:{
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    emailAddress:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    // createdAt:{
    //     type: DataTypes.DATE,
    //     allowNull: false
    // },
    // updatedAt:{
    //     type: DataTypes.DATE,
    //     allowNull:false
    // }
});

const dbSync=async ()=>{
    try {
        await User.sync();
        console.log("Users tables created successfully");
    } catch (error) {
        console.log(`Error in creating the table: ${error}`);
    }
}
dbSync();   

module.exports = User;