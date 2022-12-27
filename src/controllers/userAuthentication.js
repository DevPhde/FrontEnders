import getUser from "./getUser.js";
import {verifyPasswordAuthenticity} from "../authentication/passwordProtection.js"
import response from "./response.js";

async function authUser(user) {
    const foundUser = await getUser("email", user['email']);
    const validUser = foundUser != null ? await verifyPasswordAuthenticity(user['password'], foundUser['password']) : false;
    return validUser ? response(validUser, undefined) : response(validUser, "Email ou senha inválido.")
}

export default authUser