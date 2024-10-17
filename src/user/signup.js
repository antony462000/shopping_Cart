const createUser = require("./lib/user.create")

module.exports = async (req, res) => {
    try {
        const user = await createUser(req.body)
        res.send(user)
    } catch (error) {
        res.send(error)
    }
}