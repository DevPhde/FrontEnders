import { Routes } from "./routing/routes.js"

const form = document.querySelector("[data-form]")

form.addEventListener('submit', (e) => {
    e.preventDefault()
    Routes.LoginAuth()
})

if (sessionStorage.getItem('Hash')) {
    Routes.DashboardRedirect(true)
}