import express from 'express';
import cors from 'cors';
import connectDatabase from './config/dbConnection.js';
import routes from './routes/index.js';

const app = express();

// Ativar CORS para permitir todas as origens (para desenvolvimento)
app.use(cors());

// Caso deseje restringir a uma origem específica (como o seu front-end):
// app.use(cors({ origin: 'http://localhost:3000' }));

// Conectar ao banco de dados
await connectDatabase();

// Verificar erros e abrir conexão diretamente pelo mongoose.connection
mongoose.connection.on('error', (erro) => {
    console.error('Erro de conexão com o MongoDB:', erro);
});

mongoose.connection.once('open', () => {
    console.log('Conexão com MongoDB estabelecida com sucesso.');
});

// Rotas
routes(app);

export default app;
