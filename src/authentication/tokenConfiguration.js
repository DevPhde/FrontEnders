import { tokenGenerator } from "./tokenGenerator.js";
import users from "../models/User.js";
import ResponseJson from "../models/ResponseJson.js";

async function tokenConfig(databaseUser, sendMail) {
    const newToken = await tokenGenerator();
    if (newToken){
        const result = await users.updateOne({ _id: databaseUser._id }, { $set: { token: newToken } })
        if (result.acknowledged == true) {
            setTimeout(() => removeToken(databaseUser['_id'], newToken), 600000);
            return await sendMail(databaseUser.fullName, databaseUser.email, newToken) ? ResponseJson.response(true, undefined) : ResponseJson.response(false, "Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.")
        } else {
            return ResponseJson.response(false, "Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.")
        }
    } else {
        return ResponseJson.response(false, "Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.")
    }
}

async function removeToken(userId) {
    await users.updateOne({ _id: userId }, { $unset: { token: "" } })
}

export default tokenConfig