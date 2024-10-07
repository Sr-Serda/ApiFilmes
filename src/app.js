import express from "express";
import cors from "cors";
import mongoose from "mongoose"; // Importar mongoose
import connectDatabase from "./config/dbConnection.js";
import routes from "./routes/index.js";

const app = express();

// Ativar CORS
app.use(cors({
    origin: '*', // Permitir requisições apenas desta origem
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));
  

// Conectar ao banco de dados
await connectDatabase(); // Aguarda a conexão com o banco de dados, mas não usa o retorno

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
