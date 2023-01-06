import getUser from "../getUser.js";
import { verifyPasswordAuthenticity } from "../../authentication/passwordProtection.js"
import ResponseJson from "../../models/ResponseJson.js";
import { jwtAssignToUser } from "../../authentication/JWT.js"

async function authUser(user) {
    const foundUser = await getUser("email", user['email']);
    if (foundUser != null) {
        const validUser = await verifyPasswordAuthenticity(user['password'], foundUser['password']);
        const hash = validUser ? await jwtAssignToUser(foundUser['email']) : false
        return validUser ? ResponseJson.response(true, hash) : ResponseJson.response(validUser, "Email ou senha inválido.")
    } else {
        return ResponseJson.response(false, "Email ou senha inválido.")
    }
}

export default authUser