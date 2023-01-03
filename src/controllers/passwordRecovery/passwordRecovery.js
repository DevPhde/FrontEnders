import ResponseJson from "../../models/ResponseJson.js";
import getUser from "../getUser.js";
import {configHash} from "../../authentication/hashConfiguration.js"

async function userPasswordRecovery(user) {
    const validUser = await getUser("email", user['email']);
    return validUser != null ? configHash(validUser['_id']) : ResponseJson.response(false, "email inválido.")
}

export default userPasswordRecovery;