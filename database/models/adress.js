`use strict`;
const {Model, Sequelize, DataTypes}= require("sequelize")

module.exports =  (sequelize,DataTypes) =>{
    class Address extends Model{
        static associate (models){
            
        }
    }
    Address.init({
        id: {
            allowNull: false,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        address: {
            type: DataTypes.STRING
        },
        isPrimary: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        userId: {
            type: DataTypes.UUID
        },

    },
    {
    sequelize,
    modelName:"Address",
    tableName:"Addresses",
    timestamps:true,
    paranoid:true
}
)
    return Address
}