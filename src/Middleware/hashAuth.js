import getUser from "../controllers/getUser.js";
import dotenv from "dotenv";
dotenv.config();

export async function hashAuthentication(req, res, next) {
    let hash = req.get('Hash')
    let validHash = await getUser('hash', hash)
    if (validHash) {
        next()
    } else {
        res.status(401).send(JSON.stringify('INVALID JWT'))
    }
}