import jwt from "jsonwebtoken";
import getUser from "../controllers/getUser.js";
import users from "../models/User.js";
import dotenv from "dotenv";
dotenv.config();

async function jwtGenerator(userEmail) {
    try{
        const user = await getUser('email', userEmail);
        const hash = jwt.sign({ key: user.email }, process.env.JWT_SECRET, { expiresIn: '1d' })
        return hash
    } catch {
        return false
    }
}

export async function jwtAssignToUser(userEmail) {
const newHash = await jwtGenerator(userEmail)  
    if (newHash) {
        const result = await users.updateOne({ email: userEmail }, { $set: { hash: newHash } })
        return result.acknowledged ? newHash : "Erro Interno, Por favor tente novamente mais tarde."
    } else {
        return "Erro Interno, Por favor tente novamente mais tarde."
    }
}

export async function deleteHash(Userhash) {
    await users.updateOne({ hash: Userhash}, {$unset: {hash: ""}})
}