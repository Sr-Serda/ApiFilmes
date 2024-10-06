import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function connectDatabase() {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000, // timeout de 5 segundos para conexão com o banco de dados
        });
        console.log("Conexão com MongoDB estabelecida com sucesso.");
        return mongoose.connection;
    } catch (error) {
        console.error("Erro ao conectar com o MongoDB:", error);
        throw error;
    }
}


export default connectDatabase