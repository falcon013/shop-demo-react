const User = require('../models/user');
// user registration
exports.register_user = async (req, res) => {
    try {
        const {name, password} = req.body

        const candidate = await User.findOne({name: name})

    } catch (e) {
        res.status(400).json({message: "Bad request"})
    }
}
// user login
exports.login_user = function (req, res) {

}
// admin registration
exports.register_admin = function (req, res) {

}
// admin login

exports.login_admin = function (req, res) {

}