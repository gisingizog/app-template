const { Sequelize } = require('sequelize');
require('dotenv').config();

exports.sequelize = new Sequelize (
    process.env.MYSQL_DB,
    process.env.MYSQL_USER,
    process.env.MYSQL_PASSWORD,
    {
        HOST: process.env.MYSQL_HOST,
        dialect: "mysql"
    }
)
