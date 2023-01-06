import express from "express";
import UserController from "../controllers/userController.js";
import {hashAuthentication} from "../Middleware/hashAuth.js"

const router = express.Router();

router
    
    .post('/v1/user/register', UserController.UserRegister)
    .post('/v1/login', UserController.UserAuthentication)
    .post('/v1/dashboard', hashAuthentication, UserController.Dashboard)
    .post('/v1/user/logout', hashAuthentication, UserController.Logout)
    .post('/v1/password-recovery', hashAuthentication, UserController.PasswordRecovery)
    .post('/v1/token-resend', hashAuthentication, UserController.SendMail)
    .post('/v1/token-verify', hashAuthentication, UserController.TokenMatch)
    .put('/v1/new-password', hashAuthentication, UserController.NewPassword)

export default router;