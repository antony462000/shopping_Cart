'use strict'
const {Model}= require("sequelize")

module.exports = (sequelize,DataTypes) =>{
    class User extends Model{
        static associate (models){
            
        }

    }
    User.init({
        id:{
            allowNull: false,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name:{
            allowNull:false,
            type:DataTypes.STRING
        },
        email:{
            allowNull:false,
            type:DataTypes.STRING
        },
         mobile:{
            allowNull:false,
            type:DataTypes.STRING
        },
        password:{
            allowNull:false,
            type:DataTypes.STRING
        }
    },
{sequelize,
    modelName:"User",
    tableName:"users",
    timestamps:true,
    paranoid:true
})
return User
}