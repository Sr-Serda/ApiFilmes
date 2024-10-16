import express from "express";
import cors from "cors";
import mongoose from "mongoose"; // Importar mongoose
import connectDatabase from "./config/dbConnection.js";
import routes from "./routes/index.js";

const app = express();

// Ativar CORS
const allowedOrigins = ['http://localhost:3000', 'https://serdanoirflix.netlify.app'];

app.use(cors({
  origin: function(origin, callback){
    // Permitir solicitações sem origem (como mobile apps ou curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  // Adicionar suporte para cabeçalhos adicionais, se necessário
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  credentials: true
}));

// Conectar ao banco de dados
await connectDatabase(); // Aguarda a conexão com o banco de dados

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
