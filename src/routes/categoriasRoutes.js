import express from "express";
import categoriaController from "../controllers/categoriaController.js";
import { validarPostCategorias } from "../validators/validator.js";
import { validationResult } from "express-validator";
const routes = express.Router();

const validacao = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next(); //controladorz
};

routes.get("/categorias", categoriaController.listarCategoria);
routes.get("/categorias/:id", categoriaController.listarCategoriaID);
routes.post("/categorias", validarPostCategorias ,validacao ,categoriaController.novaCategoria, );
routes.put("/categorias/:id", categoriaController.modificarCategoria);
routes.delete("/categorias/:id", categoriaController.deletarCategoria);

export default routes;