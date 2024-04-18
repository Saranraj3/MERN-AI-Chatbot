import User from "../Models/User.js";

export const GetAllUserData = async (req, res, next) => {

    try {
        const users = await User.find();
        return res.status(200).json({ message: 'ok', users });
    } catch (error) {
        console.log(error);
        return res.status(200).json({ message: 'error', cause: error.message });
    };

};


