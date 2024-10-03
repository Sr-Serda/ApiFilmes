import express from "express";
import filmeController from "../controllers/filmeController.js";
import { validarPost } from "../validators/validator.js";
import { validationResult } from "express-validator";
const routes = express.Router();

const validacao = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next(); //controladorz
};


routes.get("/filmes", filmeController.listarFilmes);
routes.get("/filmes/:id", filmeController.listarFilmesPorId);
routes.post("/filmes", validarPost ,validacao ,filmeController.novoFilme, );
routes.put("/filmes/:id", filmeController.modificarFilme);
routes.delete("/filmes/:id", filmeController.deletarFilme);

export default routes;