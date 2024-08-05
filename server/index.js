import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import AuthRoute from './Routes/AuthRoute.js';

const app = express()

// MongoDB Database Connection

mongoose.connect(process.env.MONGODB).then(() => {
    console.log('MongoDB Connection Successfully Connected')
}).catch((err) => {
    console.log(err)
})

// API Routes
app.use(express.json());
app.use('/api/auth', AuthRoute);

app.listen(process.env.PORT, () => {
    console.log("Server Running Port 5010")
})

// Middleware

app.use((err, req, res, next) => {
    const statuscode = err.statuscode || 500
    const message = err.message || 'Something Went Wrong'
    return res.status(statuscode).json({
        success: false,
        message,
        statuscode
    })
});