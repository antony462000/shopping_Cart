'use strict';
const{DataTypes}=require("sequelize")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   return  queryInterface.createTable("Products",{
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
            type:DataTypes.INTEGER
        },
        Details:{
            allowNull:false,
            type:DataTypes.STRING
        },
        quantity:{
            allowNull:false,
            type:DataTypes.INTEGER
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
        }
    }
   )
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.dropTable("Products")
  }
};
