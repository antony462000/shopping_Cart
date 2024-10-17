`use strict`;
const { Model} = require("sequelize")

module.exports = (sequelize, DataTypes) => {
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
        isExpired: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
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
    return Coupen
}