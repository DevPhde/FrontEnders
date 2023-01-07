import { PathController } from "./controller/routingController.js"

const form = document.querySelector("[data-form]")

form.addEventListener('submit', (e) => {
    e.preventDefault()
    PathController.LoginController()
})