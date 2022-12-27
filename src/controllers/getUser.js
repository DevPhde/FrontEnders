import users from "../models/User.js"

async function getUser(param, value) {
    const handdle = {};
    handdle[param] = value;
    const result = await users.findOne(handdle);
    return result
}
export default getUser;