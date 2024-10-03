import mongoose, { Types } from "mongoose"

const categoriasScheme = new mongoose.Schema ({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: String,
    cor: String,
}, {versionKey: false})

const categoria = mongoose.model("categorias", categoriasScheme, "categoria" );

export {categoria, categoriasScheme};
