import express from "express";
import cors from "cors";
import connectDatabase from "./config/dbConnection.js";
import routes from "./routes/index.js";

const app = express();

// Ativar CORS
app.use(cors());

// Conectar ao banco de dados
const conexao = await connectDatabase();

conexao.on("error", (erro) => {
    console.error("Erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Conexão Feita");
});

routes(app);

export default app;
