import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function PostDetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Stato per l'indice dell'immagine corrente
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:4505/api/posts/${id}`
        );
        setPost(data);
      } catch (error) {
        setError("Errore nel caricamento del post");
      }
    };
    fetchPost();
  }, [id]);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!post) {
    return <p>Caricamento...</p>;
  }

  // Funzioni per navigare tra le immagini
  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? post.images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === post.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 font-cormorant-sc text-xl">
      <h1 className="text-3xl font-bold mb-4 text-center p-4">{post.title}</h1>

      {/* Carosello di immagini */}
      {post.images && post.images.length > 0 && (
        <div className="relative">
          <img
            src={`http://localhost:4505/${post.images[currentImageIndex]}`}
            alt={`Immagine ${currentImageIndex + 1}`}
            className="w-full h-auto mb-4 max-h-96 object-cover"
          />

          {/* Pulsante per andare all'immagine precedente */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white hover:bg-gray-600"
          >
            &#8249;
          </button>

          {/* Pulsante per andare all'immagine successiva */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white hover:bg-gray-600"
          >
            &#8250;
          </button>
        </div>
      )}

      <p className="text-xl leading-relaxed text-black-600 mb-4">
        {post.content}
      </p>
      <p className="text-black-600 mb-4 text-bold">
        {new Date(post.createdAt).toLocaleDateString()}
      </p>
    </div>
  );
}
