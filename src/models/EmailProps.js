class UserEmailProps {
    constructor(name, email, token){
        this.name = name;
        this.email = email;
        this.token = token;
    }
    static EmailInformations(name, email, token){
        const userEmailInformations = new UserEmailProps(name, email, token);
        return userEmailInformations
    }
}

export default UserEmailProps;