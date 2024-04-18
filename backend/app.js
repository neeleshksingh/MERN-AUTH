const express = require('express');
const connection = require('./connections/connection');
connection();
const app = express();

app.listen(3000, ()=>console.log('Server started on port 3000'));