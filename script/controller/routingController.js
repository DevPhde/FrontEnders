import { fetchApi } from "../connection/Connection.js";
import { ResponseToApi } from "../entities/Response.js";
import { Routes } from "../routing/routes.js";
import { passwordCompare } from "./passwordCompare.js";

const userError = document.getElementById("userError");

const emailError = document.getElementById("emailError");
const tokenError = document.getElementById("tokenError");
const PasswordError = document.getElementById("PasswordError");

const newPassword = document.getElementById("newPassword");
const newPassword_conffirm = document.getElementById("newPassword_conffirm");

// REGISTER
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passordConfirm = document.getElementById("check");
const identidy = document.getElementById("identidy");
const zip = document.getElementById("zip");

const userRegisterError = document.getElementById("userRegisterError");

export class PathController {

    static async LoginController() {
        const connection = await fetchApi('/v1/login', 'POST', false, ResponseToApi.loginUser());
        const response = await connection.json();
        if (!response.result) {
            userError.innerHTML = response.message;
            return false
        } else {
            if (response.message) {
                sessionStorage.setItem("Hash", response.message);
                return true
            }
            else {
                alert("Erro inesperado, tente novamente mais tarde.");
                return false
            }
        }
    }

    static async DashboardController() {
        const connection = await fetchApi('/v1/dashboard', 'POST', true);
        const response = await connection.json(); // usar response pro dashboard view
        return connection.status == 401 ? false : connection.status == 301 ? true : false;
    }

    static async EmailVerify() {
        const connection = await fetchApi('/v1/password-recovery', 'POST', false, ResponseToApi.PasswordRecovery());
        const response = await connection.json();

        if (connection.status == 500) {
            emailError.innerHTML = response.message;
            return false
        }
        if (connection.status == 401) {
            emailError.innerHTML = response.message;
            return false
        } else {
            sessionStorage.setItem("Hash", response.message);
            return true
        }
    }
    static async TokenVerify() {
        const connection = await fetchApi('/v1/token-verify', 'POST', true, ResponseToApi.Token())
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
        const connection = await fetchApi('/v1/token-resend', 'POST', true, { "hash": sessionStorage.getItem('Hash') });
        const response = await connection.json();
        if (response == 'INVALID JWT') {
            Routes.RecoveryView();
        }
        if (connection.status == 200) {
            return true
        } else {
            return false
        }
    }

    static async NewPassword() {
        if (newPassword.value != newPassword_conffirm.value) {
            PasswordError.innerHTML = "Senhas não conferem";
            return false
        }
        const connection = await fetchApi('/v1/new-password', 'PUT', true, ResponseToApi.NewPassword());
        const response = await connection.json();
        if (response == 'INVALID JWT') {
            Routes.RecoveryView();
        }
        if (connection.status == 200) {
            return true
        } else {
            PasswordError.innerHTML = response.message
            return false
        }
    }

    static async Register() {
        const validPassword = passwordCompare(password, passordConfirm)
        const connection =  validPassword ? await fetchApi('/v1/user/register', 'POST', false, ResponseToApi.UserRegister(name.value, email.value, identidy.value, password.value, zip.value)) : false
        const response  = await connection.json();
        if (response.result == true) {
            return true
        } else {
            userRegisterError.innerHTML = response.message;
        }
    }

    static async Logout() {
        const connection = await fetchApi('/v1/user/logout', 'POST', true);
        if (connection.status == 200) {
            return true
        }
    }
}