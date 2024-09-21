import { body } from "express-validator";

export const validarPost = [
    body('titulo', 'Coloque um titulo válido').not().isEmpty(),
    body('descricao', 'Coloque uma descrição válida').not().isEmpty(),
    body('url', 'Coloque uma url válida').isURL(),
]   

