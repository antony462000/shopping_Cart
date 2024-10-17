const { Op } = require("sequelize")
const { User } = require("../../../database/models")

module.exports = async (mobile, email) => {
    console.log("LLLLLL")
    return await User.findOne({
        where: {
            [Op.or]: {
                mobile, email
            }
        }
    })
}