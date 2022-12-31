import * as bcrypt from 'bcrypt';

async function passwordCryptography(password) {
    const salt = await bcrypt.genSalt(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash
}

function verifyPasswordAuthenticity(reqPassword, passwordDB){
    const salt = passwordDB.slice(0, 29)
    return (bcrypt.hashSync(reqPassword, salt) === passwordDB) === true ? true : false
}


export {passwordCryptography, verifyPasswordAuthenticity};
