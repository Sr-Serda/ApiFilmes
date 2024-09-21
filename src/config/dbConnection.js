import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function connectDatabase() {
    mongoose.connect(process.env.DB_CONNECTION_STRING);
    //Conexão com o mongoDB
    return mongoose.connection;
}

export default connectDatabase