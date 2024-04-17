const { Router } = require('express');
const { GetAllUserData } = require('../Controllers/UserController');
const UserRouter = Router();

UserRouter.get('/', GetAllUserData)

module.exports = UserRouter;