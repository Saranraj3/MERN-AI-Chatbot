const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieparser = require('cookie-parser');
const cookiesession = require('cookie-session');
require('dotenv').config();
const { MONGODB_URL, PORT } = process.env;
const router = require('./Routes/index');
const app = express();

//MongoDB Connection

mongoose
    .connect(MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB is  connected successfully"))
    .catch((err) => console.error(err));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

//Middleawers
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: 'GET,POST,PUT,DELETE',
    credentials: true
}));


app.use(cookiesession({
    name: 'session',
    keys: ['Chatbot'],
    maxAge: 24 * 60 * 60 * 100,
}));

app.use(cookieparser());
app.use(express.json());
app.use('/api', router);
