'use strict';
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
    class Payment extends Model {
        static associate(models) {
        }
    }
    Payment.init({
        id: {
            allowNull: false,
            type: DataTypes.UUID,
            primaryKey: true
        },
        order_id: {
            type: DataTypes.UUID
        },
        user_id: {
            type: DataTypes.UUID
        },
        status: {
            type: DataTypes.BOOLEAN
        },
    }, {
        sequelize,
        modelName: "Payment",
        tableName: "Payments",
        timestamps: true,
        paranoid: true,
        deletedAt: "deletedAt"
    })
    return Order;
}
