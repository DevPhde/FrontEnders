import { Routes } from "./routing/routes.js"




window.renderDashboard = function renderDashboard() {
    const render = Routes.Dashboard(false)
    if(render) {
        const body = document.querySelector('body')
        body.hidden = false
    } else {

    }
}


// modificar logica de rota dashboard.