import express from "express";
import cors from "cors";
import mongoose from "mongoose"; // Importar mongoose
import connectDatabase from "./config/dbConnection.js";
import routes from "./routes/index.js";

const app = express();

// Ativar CORS
var allowedOrigins = ['http://localhost:3000',
                      'https://6703f2c540ac100008bd980b--serdanoirflix.netlify.app/'];
app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
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
