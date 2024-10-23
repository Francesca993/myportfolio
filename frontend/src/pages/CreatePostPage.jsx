import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreatePostPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Crea un form data per il caricamento dell'immagine
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (image) {
      formData.append("images", image);
    }

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Devi essere autenticato per creare un post.");
        return;
      }

      // Invia la richiesta al backend
      const { data } = await axios.post(
        "http://localhost:4505/api/posts",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data", // Importante per il caricamento dell'immagine
          },
        }
      );

      // Reset del form e mostra il messaggio di successo
      setTitle("");
      setContent("");
      setImage(null);
      setError("");
      setSuccessMessage("Post creato con successo!");

      // Puoi scegliere di reindirizzare alla pagina dei post o fare altro
      navigate("/posts");
    } catch (error) {
      console.error("Errore nella creazione del post:", error);
      setError("Errore nella creazione del post. Riprova.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6">Crea un Nuovo Post</h1>

      {error && <p className="text-red-500">{error}</p>}
      {successMessage && <p className="text-green-500">{successMessage}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm">Titolo</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm">Contenuto</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm">Immagine (opzionale)</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full p-2 border rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-pink-600 text-white p-2 rounded hover:bg-pink-500"
        >
          Crea Post
        </button>
      </form>
    </div>
  );
}
