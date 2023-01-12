import ResponseJson from "../../models/ResponseJson.js";
import getUser from "../getUser.js";
import { jwtAssignToUser } from "../../authentication/JWT.js";

async function userPasswordRecovery(user) {
    const validUser = await getUser("email", user['email']);
    return validUser != null ? ResponseJson.response(true, await jwtAssignToUser(validUser['email']))  : ResponseJson.response(false, "Email inválido.")
}

export default userPasswordRecovery;