import { Routes } from "./routing/routes.js"

const form = document.querySelector("[data-form]")
form.addEventListener('submit', async (e) => {
    e.preventDefault()
    Routes.UserRegister()
})