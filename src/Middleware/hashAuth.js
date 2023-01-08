import getUser from "../controllers/getUser.js";
import dotenv from "dotenv";
dotenv.config();

export async function hashAuthentication(req, res, next) {
    let hash = req.get('Hash')
    if (hash == undefined) {
        res.status(401).send(JSON.stringify('INVALID JWT'))
        return false
    } else {
        let validHash = await getUser('hash', hash)
        validHash ? next() : res.status(401).send(JSON.stringify('INVALID JWT'))
    }
}