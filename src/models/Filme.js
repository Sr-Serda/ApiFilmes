import mongoose, { Types } from "mongoose";
import { categoriasScheme } from "./Categoria.js";

const filmeScheme = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    titulo: { type: String, required: true },
    descricao: { type: String},
    url: { type: String},
    categoria: categoriasScheme
}, {versionKey: false})

const filme = mongoose.model("filme", filmeScheme, "filme" )

export default filme