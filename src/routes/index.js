import express from "express";
import router from "./userRoutes.js";
import cors from "cors";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200)
    })
    
    app.use(
        express.json(),
        cors('Access-Control-Allow-Origin: *'),
        router
    )
}

export default routes