const User = require('../models/user.model');

const UserController = async (req, res) => {
    try {
        
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = UserController;