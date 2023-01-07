import { User } from "../entities/User.js";

export class Connection {
    static async LoginAuth() {
        const connection = await fetch('https://authentication-api-pvz6.onrender.com/v1/login', {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "Permissions-Policy": "interest-cohort=()"
        },
        body: JSON.stringify(User.loginUser())
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
}