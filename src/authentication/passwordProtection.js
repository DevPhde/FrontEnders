import * as bcrypt from 'bcrypt';

async function passwordCryptography(user) {
    const salt = await bcrypt.genSalt(10);
    const hash = bcrypt.hashSync(user.password, salt);
    return hash
}

async function passwordDecryptography(reqPassword, passwordDB){
    const salt = passwordDB.slice(0, 29)
    return (bcrypt.hashSync(reqPassword, salt) === passwordDB) === true ? true : false
}

export {passwordCryptography, passwordDecryptography};
