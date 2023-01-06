import getUser from "../getUser.js";
 
export async function infosToDashboard(hash) {
    const user = await getUser('hash', hash)
    const infos = user['fullName']
    return infos.split(' ').slice(0, 2).join().replace(',', ' ')
}