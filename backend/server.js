import express from "express";
import endpoints from "express-list-endpoints";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";
import postRoutes from "./routes/postRoutes.js"; // Le rotte sono importate da qui
import authRoutes from "./routes/authRoutes.js";

// Configurazione delle variabili d'ambiente
dotenv.config();

const app = express();

// Definizione di __dirname per moduli ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // Serve le immagini caricate

// Rotte
app.use("/api", postRoutes); // Usa le rotte definite in postRoutes.js
app.use("/api", authRoutes);

// Connessione al database MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connesso a MongoDB"))
  .catch((err) => console.error("Errore di connessione al database", err));

// Avvio del server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server in esecuzione sulla porta ${PORT}`);
  console.log("Sono disponibili i seguenti endpoints");
  console.table(endpoints(app));
});
