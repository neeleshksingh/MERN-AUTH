const User = require('../models/user.model');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const SignUp = async (req, res, next) => {
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
        next(error);
    }
}

module.exports = SignUp;

const Login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            const isMatch = await bcryptjs.compare(password, user.password);
            if (isMatch) {
                const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
                const { password, ...others } = user._doc;
                const expiryDate = new Date(Date.now() + 3600000);
                return res.cookie('access_token', token, { httpOnly: true, expires: expiryDate }).status(200).json(others);
            } else {
                return res.status(400).json({ message: "Invalid credentials" });
            }
        } else {
            return res.status(400).json({ message: "User not found" });
        }
    } catch (error) {
        next(error);
    }
}

module.exports = Login;