import express from "express";
import cors from "cors";
import mongoose from "mongoose"; // Importe mongoose para acessar mongoose.connection
import connectDatabase from "./config/dbConnection.js";
import routes from "./routes/index.js";

const app = express();

// Ativar CORS
app.use(cors());

// Conectar ao banco de dados
await connectDatabase(); // Chame a função de conexão, mas não armazene o retorno

// Use mongoose.connection para eventos
mongoose.connection.on("error", (erro) => {
    console.error("Erro de conexão", erro);
});

mongoose.connection.once("open", () => {
    console.log("Conexão com o MongoDB estabelecida com sucesso.");
});

// Rotas
routes(app);

export default app;
