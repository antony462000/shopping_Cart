'use strict'
const {Model}= require("sequelize")

module.exports = (sequelize,DataTypes) =>{
    class User extends Model{
        static associate (models){
            
        }

    }
    User.init({
        id: {
            allowNull: false,
            type: DataTypes.UUID,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING
        },
        mobile: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        type: {
            type: DataTypes.STRING,
            defaultValue: "USER"
        },
    },
{sequelize,
    modelName:"User",
    tableName:"users",
    timestamps:true,
    paranoid:true
})
return User
}