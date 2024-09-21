import filme  from "../models/Filme.js";

class filmeController {

    static async listarFilmes (req, res){
        const listaFilmes = await filme.find({});
        res.status(200).json(listaFilmes);
    }

    static async listarFilmesPorId (req, res){
        try{
            const id = req.params.id;
            const listaFilmesId = await filme.findById(id);
            res.status(200).json(listaFilmesId)

        }catch(erro){
            res.status(500).json({message:`Erro na requisição por ID: ${erro} ` })
        }
    }

    static async novoFilme (req, res){
        try{
        await filme.create(req.body);
        res.status(201).json({message: "Filme Criado com Sucesso"});
        }catch(erro){
            res.status(500).json({message:`${erro} "Erro na criação do filme"` })
        }
    }
}

export default filmeController;