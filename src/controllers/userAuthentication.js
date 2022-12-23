import {passwordDecryptography} from "../authentication/passwordProtection.js"
import ResponseAuthentication from "../models/ResponseAuthentication.js"
import getUser from "./getUser.js";

async function authUser(user) {
    const validUser = await getUser(user);
    const userPasswordValidation =  validUser != null ? await passwordDecryptography(user['password'], validUser['password']) : false;
    return userPasswordValidation ? responseValidation(userPasswordValidation) : responseValidation(userPasswordValidation);
}

function responseValidation(userResponse) {
    const message = userResponse ? undefined : "Email ou senha inválido.";
    const response = new ResponseAuthentication(userResponse, message);
    return response
}

export default authUser;