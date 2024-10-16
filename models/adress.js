`use strict`;
const {Model, Sequelize, DataTypes}= require("sequelize")

module.exports =  (Sequelize,DataTypes) =>{
    class Address extends Model{
        static associate (models){
            
        }
    }
    Address.init({
        id:{
            allowNull:true,
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            primaryKey:true
        },
        address:{
            type:DataTypes.STRING
        },
        isPrimary:{
            type:DataTypes.BOOLEAN
        },
         user_id:{
            type:DataTypes.UUID
        }

    },
    {
    sequelize,
    modelName:"Address",
    tableName:"Addresses",
    timestamps:true,
    paranoid:true
}
)
}