import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreatePostPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]); // Array per più immagini
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Crea un form data per il caricamento delle immagini
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);

    // Aggiungi tutte le immagini al FormData
    images.forEach((image) => {
      formData.append("images", image); // Le chiavi devono corrispondere a ciò che il backend si aspetta
    });

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Devi essere autenticato per creare un post.");
        return;
      }

      // Invia la richiesta al backend
      const { data } = await axios.post(
        `http://${API_URL}4505/api/posts`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data", // Importante per il caricamento delle immagini
          },
        }
      );

      // Reset del form e mostra il messaggio di successo
      setTitle("");
      setContent("");
      setImages([]); // Reset dell'array di immagini
      setError("");
      setSuccessMessage("Post creato con successo!");

      // Reindirizza alla pagina dei post o fai altro
      navigate("/posts");
    } catch (error) {
      console.error("Errore nella creazione del post:", error);
      setError("Errore nella creazione del post. Riprova.");
    }
  };

  // Funzione per gestire il caricamento di più immagini
  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files); // Trasforma FileList in un array
    setImages(selectedImages);
  };

  return (
    <div className="max-w-md mx-auto mt-10 pt-14">
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
          <label className="block text-sm">Immagini (opzionali)</label>
          <input
            type="file"
            multiple // Permette il caricamento di più immagini
            onChange={handleImageChange}
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
