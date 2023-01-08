import { Connection } from "../connection/Connection.js";
import { Routes } from "../routing/routes.js";

const userError = document.getElementById("userError")

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
        const response = await connection.json() // use response in dashboard view
        return connection.status == 401 ? false : connection.status == 301 ? true : false;
    }

    static async EmailVerify() {
        const connection = await Connection.VerifyValidEmailToRecoveryPassword();
        const response = await connection.json()

        if (connection.status == 500) {
            userError.innerHTML = response.message
        }
        if (connection.status == 401) {
            userError.innerHTML = response.message
            return false
        } else {
            sessionStorage.setItem("Hash", response.message)
            return true
        }
    }
    static async TokenVerify() {
        const connection = await Connection.TokenVerify()
        const response = await connection.json()
        console.log(connection)
        console.log(response)
        if (connection.status != 200) {
            if (connection.message == 'INVALID JWT') {
                console.log('sei de mais nada')
                Routes.RecoveryView()
            } else {
                console.log('caiu no else')
                userError.innerHTML = response.message
                return false
            }
        } else {
            console.log("acho que passou")
            return true
        }
    }

    static async TokenResend() {
        const connection = await Connection.TokenResend()
        const response = await connection.json()
        console.log(connection)
        console.log(response)
        if (connection.status == 200) {
            return true
        } else {
            return false
        }
    }
    
    static async Logout() {
        const connection = await Connection.Logout();
        const response = await connection.json();
        if (connection.status == 200) {
            return true
        }
    }
}