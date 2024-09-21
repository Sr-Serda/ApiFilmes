import express from "express";
import filmeController from "../controllers/filmeController.js";
import { validationResult } from "express-validator";
import { validarPost } from "../validators/validator.js";

const routes = express.Router();

const validacao = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next(); //controlador
  };

routes.get("/filmes", filmeController.listarFilmes);
routes.get("/filmes/:id", filmeController.listarFilmesPorId);
routes.post("/filmes", validarPost ,validacao ,filmeController.novoFilme, )

export default routes;