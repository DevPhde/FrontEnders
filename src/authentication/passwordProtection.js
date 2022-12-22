import * as bcrypt from 'bcrypt';

async function passwordCryptography(user) {
    const salt = await bcrypt.genSalt(10);
    const hash = bcrypt.hashSync(user.password, salt);
    return hash
}

export default passwordCryptography