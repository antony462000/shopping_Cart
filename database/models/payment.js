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
        orderId: {
            type: DataTypes.UUID
        },
        userId: {
            type: DataTypes.UUID
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: "PENDING"
        },
    }, {
        sequelize,
        modelName: "Payment",
        tableName: "Payments",
        timestamps: true,
        paranoid: true,
        deletedAt: "deletedAt"
    })
    return Payment;
}
