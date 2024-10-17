const { User } = require("../../../database/models")
const findUserByKey = require('./find.by.key')

module.exports = async (data) => {
    try {
        if (!data.name ||
            !data.password ||
            !data.email ||
            !data.mobile) { throw new Error("Enter all Details!") }
        const isUserExists = await findUserByKey(data.mobile, data.email)
        console.log(isUserExists)
        if (isUserExists?.email == data.email) throw new Error("Email already exist")
        if (isUserExists?.mobile == data.mobile) throw new Error("Mobile already exist")
        return await User.create({
            password: data.password,
            name: data.name,
            email: data.email,
            mobile: data.mobile
        })


    } catch (error) {

        throw error.message
    }
}