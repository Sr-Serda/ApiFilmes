import express from "express";
import filmes from "./filmesRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Api de Filmes"));

    app.use(express.json(), filmes)
}

export default routes;