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
                Routes.Dashboard()
            }
            else {
                alert("Erro inesperado, tente novamente mais tarde.")
            }
        }
        return
    }

    static async DashboardController() {
        const connection = await Connection.DashboardConnection();
        const response = await connection.json()
        console.log(connection)
        return connection.status == 301 ? true : false
    }
}