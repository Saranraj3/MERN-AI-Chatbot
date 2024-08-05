import User from "../Models/UserModel.js";
import bcryptjs from 'bcryptjs';

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