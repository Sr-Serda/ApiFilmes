import express from "express";
import filmes from "./filmesRoutes.js";
import categorias from "./categoriasRoutes.js"

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Api de Filmes"));

    app.use(express.json(), filmes, categorias)
}

export default routes;