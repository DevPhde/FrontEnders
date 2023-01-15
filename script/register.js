import { Routes } from "./routing/routes.js"

const form = document.querySelector("[data-form]")
form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const dados = await Routes.UserRegister()
})