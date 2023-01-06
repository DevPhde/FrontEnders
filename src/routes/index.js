import express from "express";
import router from "./userRoutes.js";
import cors from "cors";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).redirect('/home')
    })
    
    app.use(
        express.json(),
        cors(),
        router
    )
}

export default routes