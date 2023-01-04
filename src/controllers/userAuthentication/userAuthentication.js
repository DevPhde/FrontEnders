import getUser from "../getUser.js";
import { verifyPasswordAuthenticity } from "../../authentication/passwordProtection.js"
import ResponseJson from "../../models/ResponseJson.js";
import { configHash } from "../../authentication/hashConfiguration.js";

async function authUser(user) {
    const foundUser = await getUser("email", user['email']);
    if (foundUser != null) {
        const validUser = await verifyPasswordAuthenticity(user['password'], foundUser['password']);
        const hash = validUser ? await configHash(foundUser['_id']) : false;
        return validUser ? hash : ResponseJson.response(validUser, "Email ou senha inválido.")
    } else {
        return ResponseJson.response(false, "Email ou senha inválido.")
    }
}

export default authUser