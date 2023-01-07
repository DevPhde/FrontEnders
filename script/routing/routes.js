import {PathController} from "../controller/routingController.js"

export class Routes {
    static Index() {
        window.location.replace("https://devphde.github.io/FrontEnders/")
    }

    static async Dashboard() {
        const response = await PathController.DashboardController()
        if (response.status) {
            window.location.replace("https://devphde.github.io/FrontEnders/dashboard.html")
        } else {
            this.Index()
        }
    }

}