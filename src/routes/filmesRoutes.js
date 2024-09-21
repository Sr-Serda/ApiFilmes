import express from "express";
import filmeController from "../controllers/filmeController.js";
import { validarPost } from "../validators/validator.js";
import { validacao } from "../validators/validator.js";

const routes = express.Router();



routes.get("/filmes", filmeController.listarFilmes);
routes.get("/filmes/:id", filmeController.listarFilmesPorId);
routes.post("/filmes", validarPost ,validacao ,filmeController.novoFilme, )
routes.put("/filmes/:id", filmeController.modificarFilme)

export default routes;