import {PathController} from "../controller/routingController.js"

export class Routes {
    static Index() {
        window.location.replace("https://devphde.github.io/FrontEnders/")
    }

    static Login() {
        window.location.replace("https://devphde.github.io/FrontEnders/login.html")
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
    static async Dashboard() {
        const redirect = await PathController.DashboardController()
        if (!redirect) {
            this.Login()
        }
    }
    static async VerifyEmailToRecoveryPassword() {
        const redirect = await PathController.EmailVerify()
        return redirect
    }

    static async Logout(dashboard){
        const redirect = await PathController.Logout()
        if (redirect && dashboard){
            this.Index()
        }
    }
}
