import express from "express";
import UserController from "../controllers/userController.js";

const router = express.Router();

router
    .post('/v1/user/register', UserController.UserRegister)
    .post('/v1/login', UserController.UserAuthentication)
    .post('/v1/password-recovery', UserController.PasswordRecovery)
    .post('/v1/token-resend', UserController.SendMail)
    .post('/v1/token-verify', UserController.TokenMatch)
    .put('/v1/new-password', UserController.NewPassword)
export default router;