const express = require("express");
const router = express.Router();

const { login, register, dashboard, getAllUsers } = require("../Controllers/UserController");
const authMiddleware = require('../Middlewares/Auth');

router.route("/login").post(login);
router.route("/register").post(register);
router.route("/dashboard").get(authMiddleware, dashboard);
router.route("/users").get(getAllUsers);


module.exports = router;