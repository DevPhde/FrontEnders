import users from "../models/User.js"

async function getUser(user) {
    const foundUser  = await users.findOne ({"email" : user.email});
    return foundUser
}

export default getUser;