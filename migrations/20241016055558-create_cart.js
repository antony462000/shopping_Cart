'use strict';
const {DataTypes} = require("sequelize")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  return await queryInterface.createTable("carts",{
    id:{
            allowNull:false,
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            primaryKey: true
        },
        product_id:{
            allowNull:false,
            type:DataTypes.UUID
        },
        quantity:{
            type:DataTypes.INTEGER
        },
        user_id:{
            allowNull:false,
            type:DataTypes.UUID
        }
  })
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.dropTable("carts")
  }
};
