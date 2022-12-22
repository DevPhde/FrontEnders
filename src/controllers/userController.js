import users from "../models/User.js"
import getRgAndEmail from "./userCheck.js"
import passwordCryptography from "../authentication/passwordProtection.js"

class UserController {
    static UserRegister = async (req, res) => {
        let user = new users(req.body)
        let result = await getRgAndEmail(user)
        user.password = await passwordCryptography(user)
        if (result.result == false) {
            res.status(406).send(JSON.stringify(result))
        } else {
            user.save((err) => {
                if (err) {
                    res.status(500).send({ message: "Ocorreu um erro, tente novamente maisa tarde."})
                } else {
                    res.status(200).send(JSON.stringify(result))
                }
            }) 
        }
    }
}
export default UserController;