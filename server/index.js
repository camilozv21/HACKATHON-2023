const express = require('express');
const connectDB = require('./database/config/db');
const colors = require('colors')
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();
app.use(express.static('server'));

// Configura body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to database
connectDB();

const analysisRouter = require('./routes/analysisRoute');

app.use(analysisRouter);

// const corsOptions = {
//     origin: 'https://hackathon-2023-udov.vercel.app/', // Reemplaza con el origen de tu cliente
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true, // Habilita las cookies y cabeceras de autorización (si las usas)
// };
// app.use(cors(corsOptions));
const corsOptions = {
    origin: 'http://localhost:3000', // Reemplaza con el origen de tu cliente
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Habilita las cookies y cabeceras de autorización (si las usas)
};
app.use(cors(corsOptions));
// app.use(cors());

app.listen(port, console.log(`server running on port ${port}`));
