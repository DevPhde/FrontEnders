import users from "../../models/User.js";
import ResponseJson from "../../models/ResponseJson.js";
import getUser from "../getUser.js";
import { verifyPasswordAuthenticity } from "../../authentication/passwordProtection.js"
import { passwordCryptography } from "../../authentication/passwordProtection.js";

async function checkNewPassword(userParam) {
    const user = await getUser("hash", userParam['hash'])
    const matchPassword = await verifyPasswordAuthenticity(userParam.password, user.password)
    return !matchPassword ? await linkNewPassword(userParam.password, user) : ResponseJson.response(false, "Senha nova não pode ser igual a senha já cadastrada.")
}

async function linkNewPassword(newPass, user) {
    const criptPassword = await passwordCryptography(newPass)
    const result = await users.updateOne({ _id: user._id }, { $set: { password: criptPassword } })
    return result.acknowledged ? ResponseJson.response(true, undefined) : ResponseJson.response(false, "Erro inesperado ao gravar nova senha, envie um email para contato.frontenders@outlook.com")
}

export default checkNewPassword;