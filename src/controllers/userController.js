import users from "../models/User.js"
import registerValidation from "./register/userDatabaseCheck.js"
import {passwordCryptography} from "../authentication/passwordProtection.js"
import authUser from "./userAuthentication/userAuthentication.js"


class UserController {
    static UserRegister = async (req, res) => {
        let user = new users(req.body)
        let result = await registerValidation(user)
        user.password = await passwordCryptography(user)
        if (result.result == false) {
            res.status(406).send(JSON.stringify(result))
        } else {
            user.save((err) => {
                err ? res.status(500).send({ message: "Ocorreu um erro, tente novamente maisa tarde."}) : res.status(200).send(JSON.stringify(result))
            }) 
        }
    }
    static UserAuthentication = async (req, res) => {
        let user = new users(req.body)
        let validUser = await authUser(user);
        validUser.result == true ? res.status(200).send(JSON.stringify(validUser)) : res.status(401).send(JSON.stringify(validUser));
        }
    }
    

export default UserController;