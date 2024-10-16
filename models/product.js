`use strict`
const {Model}=require("sequelize")

module.exports = (sequelize,DataTypes) =>{
    class Product extends Model{
        static associate (models){

        }
    }
    Product.init({
        id:{
            allowNull:false,
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            primaryKey:true
        },
        name:{
            allowNull:false,
            type:DataTypes.STRING
        },
        price:{
            allowNull:false,
            type:DataTypes.DOUBLE
        },
        Details:{
            allowNull:false,
            type:DataTypes.STRING
        },
        quantity:{
            allowNull:false,
            type: DataTypes.DOUBLE
        },
        isOfferProduct:{
            allowNull:false,
            type:DataTypes.BOOLEAN
        },
        isCoupen:{
            allowNull:false,
            type:DataTypes.BOOLEAN
        },
        isActive:{
            allowNull:false,
            type:DataTypes.BOOLEAN
        },
    },
    {sequelize,
        modelName:"Product",
        tableName:"Products",
        timestamps:true,
        paranoid:true
    }
)
return Product
}