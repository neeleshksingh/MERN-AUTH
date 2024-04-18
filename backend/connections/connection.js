const mongoose = require('mongoose');

mongoose.set(`strictQuery`, true);
async function getConnection() {
    await mongoose.connect(process.env.URI)
        .then(() => {
            console.log("Database connected successfully 🥳");
        }).catch((e) => {
            console.error(e);
        })
}

module.exports = getConnection;