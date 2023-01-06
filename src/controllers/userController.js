import users from "../models/User.js"
import registerValidation from "./register/userDatabaseCheck.js"
import { passwordCryptography } from "../authentication/passwordProtection.js"
import authUser from "./userAuthentication/userAuthentication.js"
import userPasswordRecovery from "./passwordRecovery/passwordRecovery.js"
import Mailer from "../MailSender/emailController.js"
import tokenVerify from "../controllers/passwordRecovery/tokenVerify.js"
import checkNewPassword from "./passwordRecovery/newPassword.js"
import { deleteHash } from "../authentication/JWT.js"
import {infosToDashboard} from "./dashboard/dashboard.js"

class UserController {
    static UserRegister = async (req, res) => {
        let user = new users(req.body) // all field to register a new user
        let result = await registerValidation(user)
        user.password = await passwordCryptography(user.password)
        if (result.result == false) {
            res.status(406).send(JSON.stringify(result))
        } else {
            user.save((err) => {
                err ? res.status(500).send({ message: "Ocorreu um erro, tente novamente mais tarde." }) : res.status(200).send(JSON.stringify(result))
            })
        }
    }
    static UserAuthentication = async (req, res) => {
        let user = new users(req.body) // email + password
        let validUser = await authUser(user);
        console.log(validUser)
        validUser.result == true ? res.status(200).send(JSON.stringify(validUser)) : res.status(401).send(JSON.stringify(validUser));
    }
    // static Dashboard = async (req, res) => {        
    //     res.status(200).redirect('/dashboard')
    // }
    static PasswordRecovery = async (req, res) => {
        let user = req.body; // email
        let validAccount = await userPasswordRecovery(user);
        if (validAccount.message == "Erro Interno, Por favor tente novamente mais tarde.") {
            res.status(500).send(JSON.stringify(validAccount));
            return
        }
        if (validAccount.result) {
            const sendToken = await Mailer.catchInformationsToSendMail(validAccount.message);
            sendToken.result ? res.status(200).send(JSON.stringify(validAccount)) : res.status(500).send(JSON.stringify(sendToken));
        }
        else {
            res.status(401).send(JSON.stringify(validAccount))
        }
    }
    static SendMail = async (req, res) => {
        let hash = req.body; // hash
        let SendMail = await Mailer.catchInformationsToSendMail(hash.hash);
        if (SendMail.result == true) {
            res.status(200).send(JSON.stringify(SendMail));
        }
        else {
            res.status(401).send(JSON.stringify(SendMail))
        }
    }
    static TokenMatch = async (req, res) => {
        let recoveryParam = req.body; // hash + token
        let match = await tokenVerify(recoveryParam);
        match.result ? res.status(200).send(JSON.stringify(match)) : res.status(401).send(JSON.stringify(match));
    }
    static NewPassword = async (req, res) => {
        let newPass = req.body; // hash + password
        let password = await checkNewPassword(newPass)
        if(password.result){
            deleteHash(newPass.hash)
        }
        password.result ? res.status(200).send(JSON.stringify(password)) : res.status(401).send(JSON.stringify(password))
    }
    static Dashboard = async (req, res) => {
        let hash = req.get('Hash')
        let userInfos = await infosToDashboard(hash)
        res.send(userInfos).redirect('/dashboard')
    }
}

export default UserController;