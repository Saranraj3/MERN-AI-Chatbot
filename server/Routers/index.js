const { Router } = require('express');
const UserRouter = require('./UserRouter');
const ChatRouter = require('./ChatRouter');
const Route = Router();


Route.use('/user', UserRouter);
Route.use('/chats', ChatRouter);




module.exports = Route;
