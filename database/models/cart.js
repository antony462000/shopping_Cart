`use strrict`
const {Model} = require("sequelize")

module.exports = (sequelize,DataTypes)=>{
    class Cart extends Model{
        static associate (models){

        }
    }
    Cart.init({
        id: {
            allowNull: false,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        productId: {
            allowNull: false,
            type: DataTypes.UUID
        },
        quantity: {
            type: DataTypes.DOUBLE
        },
        userId: {
            allowNull: false,
            type: DataTypes.UUID
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        deletedAt: {
            allowNull: true,
            type: DataTypes.DATE
        }
    },
{
    sequelize,
    modelName:"Cart",
    tableName:"Carts",
    timestamps:true,
    paranoid:true
})
    return Cart
}