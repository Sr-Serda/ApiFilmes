import { categoria } from "../models/Categoria.js";
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
        const novoFilme = req.body
        try{
            const categoriaEncontrado = await categoria.findById(novoFilme.categoria);
            const filmeCompleto = { ...novoFilme, categoria: { ...categoriaEncontrado._doc }};
            const filmeCriado = await filme.create(filmeCompleto);
            res.status(201).json({ message: "criado com sucesso", filme: filmeCriado });
        } catch (erro) {
          res.status(500).json({ message: `${erro.message} - falha ao cadastrar filme` });
        }
    }

    static async modificarFilme (req, res){
        try{
            const id = req.params.id;
            const newData = req.body;
            await filme.findByIdAndUpdate(id, req.body);
            res.status(200).json({data: newData})
        }catch(erro){
            res.status(500).json({message:`${erro} "Erro na atualização do filme"`})
        }
    }

    static async deletarFilme (req, res){
        try{
            const id = req.params.id;
            await filme.findByIdAndDelete(id);
            res.status(200).json("Filme deletado com Sucesso");
        }catch(erro){
            res.status(500).json({message:`${erro} "Erro em deletar o filme"`});
        }
    }

    static async listarFilmePorCategoria(req, res) {
        const categoria = req.query.categoria;
        try{
            const filmePorCategoria = await filme.find({"categoria.titulo": categoria});
            res.status(200).json(filmePorCategoria);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na busca` });
          }
    }
}

export default filmeController;