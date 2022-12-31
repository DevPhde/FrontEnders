import ResponseJson from "../../models/ResponseJson.js";
import getUser from "../getUser.js";
import users from "../../models/User.js"
import generateHash from "../../authentication/hashGenerator.js";

async function userPasswordRecovery(user) {
    const validUser = await getUser("email", user['email']);
    return validUser != null ? configHash(validUser['_id']) : ResponseJson.response(false, "email inválido.")
}

async function configHash(validAccount) {
    const newHash = generateHash()
    if (newHash) {
        const result = await users.updateOne({ _id: validAccount }, { $set: { hash: newHash } })
        return result.acknowledged ? ResponseJson.response(true, newHash) : ResponseJson.response(false, "Erro Interno, Por favor tente novamente mais tarde.")
    } else {
        return ResponseJson.response(false, "Erro Interno, Por favor tente novamente mais tarde.")
    }
}
export default userPasswordRecovery;