import mongoose from "mongoose";

const filmeScheme = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    categorias: {
        idCategoria: { type: mongoose.Schema.Types.ObjectId },
        titulo: String,
        cor: String,
    },
    titulo: { type: String, required: true },
    descricao: { type: String},
    url: { type: String}
}, {versionKey: false})

const filme = mongoose.model("filme", filmeScheme, "filme" )

export default filme