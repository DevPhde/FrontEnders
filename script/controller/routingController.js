import { Connection } from "../connection/Connection.js";
import { Routes } from "../routing/routes.js";

const userError = document.getElementById("userError")

const emailError = document.getElementById("emailError")
const tokenError = document.getElementById("tokenError")
const PasswordError = document.getElementById("PasswordError")

const newPassword = document.getElementById("newPassword")
const newPassword_conffirm = document.getElementById("newPassword_conffirm")

export class PathController {

    static async LoginController() {
        const connection = await Connection.LoginAuth()
        const response = await connection.json();
        if (!response.result) {
            userError.innerHTML = response.message
        } else {
            if (response.message) {
                sessionStorage.setItem("Hash", response.message)
                Routes.DashboardRedirect()
            }
            else {
                alert("Erro inesperado, tente novamente mais tarde.")
            }
        }
        return
    }

    static async DashboardController() {
        const connection = await Connection.DashboardConnection();
        const response = await connection.json() // usar response pro dashboard view
        return connection.status == 401 ? false : connection.status == 301 ? true : false;
    }

    static async EmailVerify() {
        const connection = await Connection.VerifyValidEmailToRecoveryPassword();
        const response = await connection.json()

        if (connection.status == 500) {
            emailError.innerHTML = response.message
            return false
        }
        if (connection.status == 401) {
            emailError.innerHTML = response.message
            return false
        } else {
            sessionStorage.setItem("Hash", response.message)
            return true
        }
    }
    static async TokenVerify() {
        const connection = await Connection.TokenVerify()
        const response = await connection.json()
        if (connection.status != 200) {
            if (response == 'INVALID JWT') {
                Routes.RecoveryView()
            } else {
                tokenError.innerHTML = response.message
                return false
            }
        } else {
            return true
        }
    }

    static async TokenResend() {
        const connection = await Connection.TokenResend()
        const response = await connection.json()
        if (response == 'INVALID JWT'){
            Routes.RecoveryView()
        }
        if (connection.status == 200) {
            return true
        } else {
            return false
        }
    }

    static async NewPassword() {
        console.log(newPassword.value, newPassword_conffirm.value)
        if (newPassword.value != newPassword_conffirm.value){
            PasswordError.innerHTML = "Senhas não conferem"
            return false
        }
        const connection = await Connection.NewPassword()
        const response = await connection.json()
        if (response == 'INVALID JWT'){
            Routes.RecoveryView()
        }
        if (connection.status == 200) {
            return true
        } else {
            PasswordError.innerHTML = response.message
            return false
        }
    }
    
    static async Logout() {
        const connection = await Connection.Logout();
        if (connection.status == 200) {
            return true
        }
    }
}