import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import connectDatabase from "./config/dbConnection.js";
import routes from "./routes/index.js";

const app = express();

// Configurar o CORS para permitir todas as origens (em desenvolvimento)
app.use(cors({ origin: 'http://localhost:3000' }));



// Conectar ao banco de dados
await connectDatabase();

// Verificar erros e abrir conexão diretamente pelo mongoose.connection
mongoose.connection.on("error", (erro) => {
    console.error("Erro de conexão com o MongoDB:", erro);
});

mongoose.connection.once("open", () => {
    console.log("Conexão com MongoDB estabelecida com sucesso.");
});

// Rotas
routes(app);

export default app;
