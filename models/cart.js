`use strrict`
const {Model} = require("sequelize")

module.exports = (sequelize,DataTypes)=>{
    class Cart extends Model{
        static associate (models){

        }
    }
    Cart.init({
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
    },
{
    sequelize,
    modelName:"Cart",
    tableName:"carts",
    timestamps:true,
    paranoid:true
})
}