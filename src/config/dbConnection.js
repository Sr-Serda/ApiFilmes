import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function connectDatabase() {
    const connectionString = process.env.DB_CONNECTION_STRING;
    
    if (!connectionString) {
        throw new Error("String de conexão com o MongoDB não foi encontrada. Verifique a variável DB_CONNECTION_STRING.");
    }
    
    try {
        await mongoose.connect(connectionString);
        console.log("Conexão com MongoDB estabelecida com sucesso.");
        return mongoose.connection;
    } catch (error) {
        console.error("Erro ao conectar com o MongoDB:", error);
        throw error;
    }
}

export default connectDatabase;
