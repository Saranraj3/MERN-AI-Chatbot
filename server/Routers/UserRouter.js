import { Router } from 'express';
import { GetAllUserData } from '../Controllers/UserController.js';
const UserRouter = Router();

UserRouter.get('/', GetAllUserData)

export default UserRouter;