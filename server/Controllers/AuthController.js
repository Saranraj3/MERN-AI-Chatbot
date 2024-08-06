import User from "../Models/UserModel.js";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { ErrorHandler } from "../Utils/Error.js";

export const Signup = async (req, res, next) => {
    const { Name, Email, Password } = req.body
    const Hashpassword = bcryptjs.hashSync(Password, 10);
    const NewUser = new User({ Name, Email, Password: Hashpassword });
    try {
        await NewUser.save();
        res.status(201).json({ message: "User Created Successfully" });
    } catch (error) {
        next(error)
    };
};

export const Login = async (req, res, next) => {
    const { Email, Password } = req.body
    try {
        const validUser = await User.findOne({ Email });
        if (!validUser) return next(ErrorHandler(404, 'User Not Found'));
        const validPassword = bcryptjs.compareSync(Password, validUser.Password);
        if (!validPassword) return next(ErrorHandler(401, 'Something Wrong User Credntials'));
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        const { Password: Hashpassword, ...rest } = validUser._doc;
        const expiryDate = new Date(Date.now() + 3600000); // 1 Hour
        res.cookie('access_token', token, { httpOnly: true, expires: expiryDate }).status(200).json(rest);
    } catch (error) {
        next(error)
    };
};