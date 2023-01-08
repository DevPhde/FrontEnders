let email = document.getElementById("email_input")
let password = document.getElementById("floatingPassword")

export class ReponseToApi {    
    static loginUser() {
        return {
            "email": email.value,
            "password": password.value
        }
    }
    static PasswordRecovery() {
        return {
            "email": email.value
        }
    }
}