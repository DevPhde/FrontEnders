import {PathController} from "../controller/routingController.js"

export class Routes {
    static Index() {
        window.location.replace("https://devphde.github.io/FrontEnders/")
    }

    static async Dashboard() {
        const response = await PathController.DashboardController()
        console.log(response)
        if (response) {
            console.log('sim')
            window.location.replace("https://devphde.github.io/FrontEnders/dashboard.html")
        } else {
            // this.Index()
        }
    }

}
