`use strict`;
const { Model, Sequelize, DataTypes } = require("sequelize")

module.exports = (Sequelize, DataTypes) => {
    class Coupen extends Model {
        static associate(models) {

        }
    }
    Coupen.init({
        id: {
            allowNull: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        code: {
            type: DataTypes.STRING
        },
        type: {
            type: DataTypes.STRING
        },
        value: {
            type: DataTypes.DOUBLE
        },
        isExpire: {
            type: DataTypes.BOOLEAN
        },
        validity: {
            type: DataTypes.DATE
        },

    },
        {
            sequelize,
            modelName: "Coupen",
            tableName: "Coupens",
            timestamps: true,
            paranoid: true
        }
    )
}