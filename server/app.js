const express = require('express');
const connectDB = require('./database/config/db');
const colors = require('colors')
const cors = require('cors')
require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

// Connect to database
connectDB();

app.use(cors());

app.get('/', (req, res) => {
    res.send(`Bienvenidos a mi servidor`)
});

app.listen(port, console.log(`server running on port ${port}`));
