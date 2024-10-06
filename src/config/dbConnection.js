import mongoose from "mongoose";  // Certifique-se de que isso está presente

import dotenv from "dotenv";

dotenv.config();

async function connectDatabase() {
    let cachedConnection = null;

    if (cachedConnection) {
        console.log("Usando conexão MongoDB existente.");
        return cachedConnection;
    }

    const connectionString = process.env.DB_CONNECTION_STRING;
    
    if (!connectionString) {
        console.error("String de conexão não encontrada.");
        throw new Error("String de conexão com o MongoDB não foi encontrada. Verifique a variável DB_CONNECTION_STRING.");
    }

    try {
        console.log("Tentando conectar ao MongoDB...");
        cachedConnection = await mongoose.connect(connectionString);
        console.log("Conexão com MongoDB estabelecida com sucesso.");
        return cachedConnection;
    } catch (error) {
        console.error("Erro ao conectar com o MongoDB:", error);
        throw error;
    }
}

export default connectDatabase;
