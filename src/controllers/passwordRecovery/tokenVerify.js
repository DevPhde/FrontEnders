import ResponseJson from "../../models/ResponseJson.js";
import getUser from "../getUser.js"

async function tokenVerify(param) {
    const validUser = await getUser("hash", param['hash']);
    if (validUser != null) {
        return validUser.token == param.token ? ResponseJson.response(true, undefined) : ResponseJson.response(false, "Token inválido.")
    }
}

export default tokenVerify