import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()

const app = express()

// MongoDB Database Connection

mongoose.connect(process.env.MONGODB).then(() => {
    console.log('MongoDB Connection Successfully Connected')
}).catch((err) => {
    console.log(err)
})

app.listen(process.env.PORT, () => {
    console.log("Server Running Port 5010")
})