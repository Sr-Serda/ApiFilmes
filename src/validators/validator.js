import { body } from "express-validator";

export const validarPostFilmes = [
    body('titulo', 'Coloque um titulo válido').not().isEmpty(),
    body('descricao', 'Coloque uma descrição válida').not().isEmpty(),
    body('url', 'Coloque uma url válida').isURL(),
]   

export const validarPostCategorias = [
    body('titulo', 'Coloque uma categoria válida').not().isEmpty(),
    body('cor', 'Coloque uma cor válida').not().isEmpty(),
]