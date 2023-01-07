let email = document.getElementById("floatingInput")
let password = document.getElementById("floatingPassword")

export class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    static loginUser() {
        const user = new User(email.value, password.value)
        return user
    }
}