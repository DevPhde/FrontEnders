import { ReponseToApi } from "../entities/Response.js";

export class Connection {
    static async LoginAuth() {
        const connection = await fetch('https://authentication-api-pvz6.onrender.com/v1/login', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "Permissions-Policy": "interest-cohort=()"
            },
            body: JSON.stringify(ReponseToApi.loginUser())
        });
        return connection
    };

    static async DashboardConnection() {
        const connection = await fetch('https://authentication-api-pvz6.onrender.com/v1/dashboard', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "Permissions-Policy": "interest-cohort=()",
                "Hash": sessionStorage.getItem('Hash')
            }
        });
        return connection
    }

    static async VerifyValidEmailToRecoveryPassword() {
        const connection = await fetch('https://authentication-api-pvz6.onrender.com/v1/password-recovery', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "Permissions-Policy": "interest-cohort=()"
            },
            body: JSON.stringify(ReponseToApi.PasswordRecovery())
        });
        console.log(connection)
        return connection
    }

    static async TokenVerify() {
        const connection = await fetch('https://authentication-api-pvz6.onrender.com/v1/token-verify', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "Permissions-Policy": "interest-cohort=()",
                "Hash": sessionStorage.getItem('Hash')
            },
            body: JSON.stringify(ReponseToApi.Token())
        });
        return connection
    }

    static async TokenResend() {
        const connection = await fetch('https://authentication-api-pvz6.onrender.com/v1/token-resend', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "Permissions-Policy": "interest-cohort=()",
                "Hash": sessionStorage.getItem('Hash')
            },
            body: JSON.stringify({"hash": sessionStorage.getItem('Hash')})
        });
        return connection
    }

    static async NewPassword() {
        console.log(ReponseToApi.NewPassword())
        const connection = await fetch('https://authentication-api-pvz6.onrender.com/v1/new-password', {
            method: "PUT",
            headers: {
                "content-type": "application/json",
                "Permissions-Policy": "interest-cohort=()",
                "Hash": sessionStorage.getItem('Hash')
            },
            body: JSON.stringify(ReponseToApi.NewPassword())
        });
        return connection
    }

    static async Logout() {
        const connection = await fetch('https://authentication-api-pvz6.onrender.com/v1/user/logout', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "Permissions-Policy": "interest-cohort=()",
                "Hash": sessionStorage.getItem('Hash')
            },
        });
        return connection
    }


}