import ChatRouter from './ChatRouter.js';
import UserRouter from './UserRouter.js';
import { Router } from 'express';
const Route = Router();


Route.use('/user', UserRouter);
Route.use('/chats', ChatRouter);



export default Route;
