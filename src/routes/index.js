import express from "express";
import router from "./userRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200);
    })
    
    app.use(
        express.json(),
        router
    )
}

export default routes