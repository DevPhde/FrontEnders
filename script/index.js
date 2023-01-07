import { dashboardView } from "./dashboard.js"
import { Connection } from "./Connection.js"

let email = document.getElementById("floatingInput")
let password = document.getElementById("floatingPassword")
const form = document.querySelector("[data-form]")
const userError = document.getElementById("userError")


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

async function connect() {
    const connection = await Connection.LoginAuth()
    const response = await connection.json();
    if (!response.result){
        userError.innerHTML = response.message
    } else {
        if(response.message){
        sessionStorage.setItem("Hash", response.message)
        dashboardView(response.message)
        }
        else {
            alert("Erro inesperado, tente novamente mais tarde.")
        }
    }
    return
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    connect()
})