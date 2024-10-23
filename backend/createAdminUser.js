import mongoose from "mongoose";
import dotenv from "dotenv"; // Importa dotenv
import path from "path"; // Importa path
import User from "./model/User.js";

// Carica le variabili d'ambiente dal file .env
dotenv.config({ path: path.resolve(process.cwd(), ".env") });

const createAdminUser = async () => {
  try {
    // Connettiti al database MongoDB
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connesso a MongoDB");

    // Controlla se esiste già un utente amministratore
    const existingAdmin = await User.findOne({
      username: process.env.ADMIN_USERNAME,
    });
    if (existingAdmin) {
      console.log(
        "Utente amministratore già esistente:",
        existingAdmin.username
      );
      return;
    }

    // Crea un nuovo utente amministratore
    const newUser = new User({
      username: process.env.ADMIN_USERNAME,
      password: process.env.ADMIN_PASSWORD, // La password sarà hashata dal model User
    });

    // Salva il nuovo utente nel database
    await newUser.save();
    console.log("Utente amministratore creato con successo");
  } catch (error) {
    console.error(
      "Errore durante la creazione dell'utente amministratore:",
      error
    );
  } finally {
    // Disconnettiti dal database
    mongoose.connection.close();
  }
};

// Esegui lo script
createAdminUser();
