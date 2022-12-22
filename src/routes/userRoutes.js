import express from "express";
import UserController from "../controllers/userController.js";

const router = express.Router();

router
    .post('/v1/user/register', UserController.UserRegister)
    .post('/v1/login', UserController.UserAuthentication)


export default router;