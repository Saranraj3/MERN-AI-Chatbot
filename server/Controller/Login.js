const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserModel = require('../Models/UserModel');

async function UserLoginController(req, res) {
    try {
        const { Email, Password } = req.body
        const user = await UserModel.findOne({ Email })

        if (!user) {
            throw new Error('User Not Found')
        }

        if (!Email) {
            throw new Error('Enter Your Email')
        }
        if (!Password) {
            throw new Error('Enter Your Password')
        }

        const CheckPassword = await bcrypt.compare(Password, user.Password)
        console.log('checkpassword', CheckPassword)

        if (CheckPassword) {

            const tokenData = {
                _id: user._id,
                Email: user.Email,
            }

            const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY, { expiresIn: 60 * 60 * 8 });

            const tokenOption = {
                httpOnly: true,
                secure: true
            }
            res.cookie('token', token, tokenOption).json({
                message: 'Login Successfully Created',
                data: token,
                success: true,
                error: false
            })

        } else {
            throw new Error('Check Your Password')
        }

    } catch (err) {
        res.json({
            message: err.message || err,
            error: true,
            success: false
        })
    }
}

module.exports = UserLoginController;