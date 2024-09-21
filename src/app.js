import express from "express"
import connectDatabase from "./config/dbConnection.js"
import routes from "./routes/index.js"

const conexao = await connectDatabase();

conexao.on("error", (erro) => {
    console.error("Erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Conexão Feita");
})

const app = express();
routes(app);

export default app;