import users from "../models/User.js";
import ResponseJson from "../models/ResponseJson.js";
import generateHash from "./hashGenerator.js";

async function configHash(validAccount) {
    const newHash = generateHash()
    if (newHash) {
        const result = await users.updateOne({ _id: validAccount }, { $set: { hash: newHash } })
        return result.acknowledged ? ResponseJson.response(true, newHash) : ResponseJson.response(false, "Erro Interno, Por favor tente novamente mais tarde.")
    } else {
        return ResponseJson.response(false, "Erro Interno, Por favor tente novamente mais tarde.")
    }
}

async function deleteHash(userHash) {
    await users.updateOne({ hash: userHash }, { $unset: { hash: "" } })
}

export {configHash, deleteHash};