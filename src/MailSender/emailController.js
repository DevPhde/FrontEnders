import sendMail from "./SendMail.js";
import getUser from "../controllers/getUser.js";
import tokenConfig from "../authentication/tokenConfiguration.js"

class Mailer {
    constructor(id, name, email, token) {
        this._id = id;
        this.fullName = name;
        this.email = email;
        this.token = token;
    }
    static async catchInformationsToSendMail(hash) {
        let informationToSendMail = await getUser("hash", hash);
        informationToSendMail = new Mailer(informationToSendMail['_id'], informationToSendMail['fullName'], informationToSendMail['email'], informationToSendMail['token']);
        return tokenConfig(informationToSendMail, sendMail)
    }
}

export default Mailer;