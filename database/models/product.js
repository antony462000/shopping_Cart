`use strict`
const {Model}=require("sequelize")

module.exports = (sequelize,DataTypes) =>{
    class Product extends Model{
        static associate (models){

        }
    }
    Product.init({
        id: {
            allowNull: false,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        price: {
            allowNull: false,
            type: DataTypes.DOUBLE
        },
        details: {
            allowNull: false,
            type: DataTypes.STRING
        },
        quantity: {
            allowNull: false,
            type: DataTypes.DOUBLE
        },
        isOfferProduct: {
            allowNull: false,
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        isCoupenProduct: {
            allowNull: false,
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        isActive: {
            allowNull: false,
            type: DataTypes.BOOLEAN,
            defaultValue: true
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