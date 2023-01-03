import sendMail from "./SendMail.js";
import ResponseJson from "../models/ResponseJson.js";
import { tokenGenerator } from "../authentication/tokenGenerator.js";
import getUser from "../controllers/getUser.js";
import users from "../models/User.js";

class Mailer {
    constructor(id, name, email, token) {
        this._id = id;
        this.fullName = name;
        this.email = email;
        this.token = token;
    }
    static async catchInformationsToSendMail(hash) {
        let informationToSendMail = await getUser("hash", hash);
        console.log(informationToSendMail)
        informationToSendMail = new Mailer(informationToSendMail['_id'], informationToSendMail['fullName'], informationToSendMail['email'], informationToSendMail['token']);
        console.log(informationToSendMail)
        return tokenConfig(informationToSendMail, sendMail)
    }
}

async function tokenConfig(databaseUser, sendMail) {
    const newToken = await tokenGenerator();
    console.log(newToken)
    if (newToken) {
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

export default Mailer;