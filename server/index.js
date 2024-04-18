import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import Route from './Routers/index.js';
import { config } from 'dotenv';
const { PORT } = process.env;
config();
const app = express();

mongoose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB is  connected successfully"))
    .catch((err) => console.error(err));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

//Middleawers
app.use(express.json());
app.use(morgan('dev'));
app.use('/api/version/', Route);




