import mongoose from "mongoose";
import Usuario from "./models/user.model.js";
import connectMongoDB from "./config/mongoDB.config.js";




connectMongoDB()


//crearUsuario('maria', 'maria@gmail', 'maria123')