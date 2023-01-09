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

    static async DashboardRedirect() {
        const redirect = await PathController.DashboardController()
        if (redirect)  {
            this.Dashboard()
            window.location.replace("https://devphde.github.io/FrontEnders/dashboard.html")
        } else {
            this.Login()
        }
    }
    static async Dashboard(login) {
        const redirect = await PathController.DashboardController()
        if(login){
            if(redirect) this.Login()
        }
        if (!redirect) this.Login()

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
