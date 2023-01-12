import { Routes } from "./routing/routes.js"



window.onload = async () => {
    const render = await Routes.Dashboard()
    if(render) {
        const body = document.querySelector('body')
        body.hidden = false
    }
}



