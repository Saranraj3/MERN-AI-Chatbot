const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const {MONGODB_URL,PORT} = process.env;
const app = express();

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