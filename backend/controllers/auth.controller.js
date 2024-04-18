const User = require('../models/user.model');
const bcryptjs = require('bcryptjs');

const SignUp = async (req,res) => {
    try {
        const { username, email, password } = req.body;

        const existingEmail = await User.findOne({ email });
        const existingUsername = await User.findOne({ username });
        if (existingEmail || existingUsername) {
            return res.status(400).json({ message: "Email already exists" });
        } else {
            const hashedPassword = await bcryptjs.hash(password, 10);
            const newUser = new User({
                username, email, password: hashedPassword
            })
            await newUser.save();
            return res.status(200).json(newUser);
        }
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = SignUp;