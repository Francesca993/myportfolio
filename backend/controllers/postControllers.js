// postControllers.js
import Post from "../model/Post.js";
import User from "../model/User.js"; // Importa il modello utente

export const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const images = req.files?.map((file) => file.path) || []; // Rendi le immagini opzionali

    if (!title || !content) {
      return res
        .status(400)
        .json({ message: "Titolo e contenuto sono obbligatori" });
    }

    const author = req.user._id; // Assicurati che req.user sia impostato dal middleware authenticate

    const post = new Post({
      title,
      content,
      images,
      author,
    });

    await post.save();
    res.status(201).json(post);
  } catch (error) {
    console.error("Errore nella creazione del post:", error);
    res.status(500).json({ message: "Errore nella creazione del post", error });
  }
};

// Ottiene tutti i post
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("author", "username email"); // Popola i dati dell'autore
    res.json(posts);
  } catch (error) {
    console.error("Errore nel recupero dei post:", error);
    res.status(500).json({ message: "Errore nel recupero dei post" });
  }
};

// Ottiene un singolo post per ID
export const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate("author");

    if (!post) {
      return res.status(404).json({ message: "Post non trovato" });
    }

    res.json(post);
  } catch (error) {
    console.error("Errore nel recupero del post:", error);
    res.status(500).json({ message: "Errore nel recupero del post" });
  }
};

export const deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post non trovato" });
    }

    res.json({ message: "Post eliminato con successo" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
