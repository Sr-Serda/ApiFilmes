import {categoria} from "../models/Categoria.js";

class categoriaController {

    static async listarCategoria (req, res){
        const listaCategoria = await categoria.find({});
        res.status(200).json(listaCategoria);
    }


    static async listarCategoriaID (req, res) {
        try{
            const id = req.params.id;
            const listaCategoriaID = await filme.findById(id, '', { $exists: true, $ne: null } )
            res.status(200).json(listaCategoriaID)
        }catch(erro){
            res.status(500).json({message:`Erro na requisição por categoria ID: ${erro} ` })
        }
    }

    

    static async novaCategoria (req, res){
        try{
        await categoria.create(req.body);
        res.status(201).json({message: "Categoria Criada com Sucesso"});
        }catch(erro){
            res.status(500).json({message:`${erro} "Erro na criação da categoria"` })
        }
    }

    static async modificarCategoria (req, res){
        try{
            const id = req.params.id;
            const newData = req.body;
            await categoria.findByIdAndUpdate(id, req.body);
            res.status(200).json({data: newData})
        }catch(erro){
            res.status(500).json({message:`${erro} "Erro na atualização da categoria"`})
        }
    }

    static async deletarCategoria (req, res){
        try{
            const id = req.params.id;
            await categoria.findByIdAndDelete(id, '', { $exists: true, $ne: null });
            res.status(200).json("Categoria deletada com Sucesso");
        }catch(erro){
            res.status(500).json({message:`${erro} "Erro em deletar a categoria"`});
        }
    }
}

export default categoriaController;