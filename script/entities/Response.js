let email = document.getElementById("email_input")
let password = document.getElementById("floatingPassword")
let token = document.getElementById("token_input")

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
    static Token(){
        return {
            "hash": sessionStorage.getItem('Hash'),
            "token": token.value
        }
    }
}