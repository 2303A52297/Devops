const {sequelize} = require("sequelize");
const sequelize=new Sequelize(
    "Studentdb",
    "root",
    "#Chowdary@2004",
    {
        host:"localhost",
        dialect:"postgres"
    }
);
module.exports=sequelize;



