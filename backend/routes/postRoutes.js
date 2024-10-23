import express from "express";
import {
  createPost,
  getPosts,
  getPostById,
  deletePost,
} from "../controllers/postControllers.js";
import multer from "multer";
import { authenticate } from "../middlewares/authMiddleware.js"; // Importa il middleware di autenticazione

const router = express.Router();

// Configurazione di Multer per il caricamento delle immagini
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Directory per salvare le immagini
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Nome del file univoco
  },
});

// Filtro per accettare solo file JPEG e PNG
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true); // Accetta il file
  } else {
    cb(
      new Error("Tipo di file non supportato. Solo JPEG e PNG sono ammessi."),
      false
    ); // Rifiuta il file
  }
};

// Configurazione di Multer con limite di dimensione (5MB) e filtro del tipo di file
const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 5, // Limite di 5MB
  },
});

// Rotta per creare un post (protetta dall'autenticazione e con caricamento immagini)
router.post("/posts", authenticate, upload.array("images", 10), createPost);

// Rotta per ottenere tutti i post
router.get("/posts", getPosts);

// Rotta per ottenere un singolo post per ID
router.get("/posts/:id", getPostById);

// Rotta per eliminare un post per ID (protetta dall'autenticazione)
router.delete("/posts/:id", authenticate, deletePost);

export default router;
