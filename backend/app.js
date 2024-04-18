const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const connection = require('./connections/connection');
const User = require('./routes/user.route');
connection();
const app = express();
app.use(express.json());

app.use('/api/auth', User);

app.get('/', (req, res) => {
    return res.status(200).send('Welcome to MERN-AUTH API');
})

app.get('*', (req, res) => {
    return res.status(404).send('API not found');
})

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode
    })
})

app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`));