import {PathController} from "../controller/routingController.js"

export class Routes {
    static Index() {
        window.location.replace("https://devphde.github.io/FrontEnders/")
    }

    static Login() {
        sessionStorage.clear()
        window.location.replace("https://devphde.github.io/FrontEnders/login.html")
    }

    static RecoveryView() {
        sessionStorage.clear()
        window.location.replace("https://devphde.github.io/FrontEnders/forgotpass.html")
    }

    static async LoginAuth() {
        const redirect = await PathController.LoginController()
        if (redirect) {
            Routes.DashboardRedirect()
        } else {
            return false
        }
    }

    static async DashboardRedirect() {
        const redirect = await PathController.DashboardController()
        if (redirect)  {
            window.location.replace("http://127.0.0.1:5500/dashboard.html")
        } else {
            this.Login()
        }
    }

    static async Dashboard() {
        const redirect = await PathController.DashboardController()
        return !redirect ? this.Login() : true
    }

    static async VerifyEmailToRecoveryPassword() {
        return await PathController.EmailVerify()

    }

    static async VerifyToken(){
        return await PathController.TokenVerify()
    }

    static async TokenResend(){
        return await PathController.TokenResend()
    }

    static async NewPassword() {
        return await PathController.NewPassword()
    }

    static async Logout(dashboard){
        const redirect = await PathController.Logout()
        if (redirect && dashboard){
            this.Index()
        }
    }
}
