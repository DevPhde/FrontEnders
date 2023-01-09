import { PathController } from "./controller/routingController.js"
import { Routes } from "./routing/routes.js"

const form = document.querySelector("[data-form]")

form.addEventListener('submit', (e) => {
    e.preventDefault()
    PathController.LoginController()
})

if (sessionStorage.getItem('Hash')) {
    Routes.Dashboard(true)
}