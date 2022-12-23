import users from "../models/User.js"
import {passwordDecryptography} from "../authentication/passwordProtection.js"
import ResponseAuthentication from "../models/ResponseAuthentication.js"

async function authUser(user) {
    const foundUser  = await users.findOne ({"email" : user.email})
    const validUser = foundUser != null ? await passwordDecryptography(user['password'], foundUser['password']) : false;
    return validUser ? responseValidation(validUser) : responseValidation(validUser)
}

function responseValidation(userResponse) {
    const message = userResponse ? undefined : "Email ou senha inválido.";
    const response = new ResponseAuthentication(userResponse, message)
    return response
}


export default authUser