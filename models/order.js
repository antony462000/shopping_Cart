'use strict';
const {Model} = require("sequelize")
module.exports=(sequelize,DataTypes)=>{
    class Order extends Model{
        static associate(models){
        }       
    }
    Order.init({
        id: {
            allowNull: false,
            type: DataTypes.UUID,
            primaryKey:true
        },
        product_id: {
            type: DataTypes.UUID
        },
        user_id: {
            type: DataTypes.UUID
        },
        address_id: {
            type: DataTypes.UUID
        },
        payment_id: {
            type: DataTypes.UUID
        },
        paymentMethod: {
            type: DataTypes.STRING
        },
        amount: {
            type: DataTypes.DOUBLE
        },
        status: {
            type: DataTypes.BOOLEAN
        },
        deliveryStatus: {
            type: DataTypes.BOOLEAN
        },
        paymentStatus: {
            type: DataTypes.BOOLEAN
        },
    },{
        sequelize,
        modelName:"Order",
        tableName:"Orders",
        timestamps:true,
        paranoid:true,
        deletedAt:"deletedAt"
    })
    return Order;
}
