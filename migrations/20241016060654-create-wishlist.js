'use strict';
const {DataTypes}=require("sequelize")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable('Wishlists', {

      id:{ 
      allowNull:false,
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      primaryKey:true
    },
   product_id:{ 
      allowNull:false,
      type:DataTypes.UUID
    },
    user_id:{ 
      allowNull:false,
      type:DataTypes.UUID
    },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue:DataTypes.NOW
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue:DataTypes.NOW
      },
      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable('Wishlists');
  }
};