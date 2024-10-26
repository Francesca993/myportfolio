import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const isAuthenticated = !!localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get("http://localhost:4505/api/posts");
        setPosts(data);
      } catch (error) {
        setError("Errore nel caricamento dei post");
      }
    };
    fetchPosts();
  }, []);

  const handleDelete = async (postId) => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    try {
      await axios.delete(`http://localhost:4505/api/posts/${postId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPosts(posts.filter((post) => post._id !== postId)); // Aggiorna la lista dei post dopo la cancellazione
    } catch (error) {
      console.error("Errore nella cancellazione del post:", error);
    }
  };

  return (
    <div className="font-cormorant-sc min-h-screen max-w-7xl mx-auto pt-14 px-4 sm:px-6 lg:px-8 mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Tra Sogni e Progetti: Le Mie Storie
      </h1>

      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post._id}
            className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <Link to={`/posts/${post._id}`}>
              {post.images && post.images.length > 0 && (
                <img
                  src={`http://localhost:4505/${post.images[0]}`}
                  alt={post.title}
                  className="h-48 w-full object-cover"
                />
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-gray-600">
                  {new Date(post.createdAt).toLocaleDateString()}
                </p>
              </div>
            </Link>

            {/* Mostra il pulsante di cancellazione solo se l'utente è autenticato */}
            {isAuthenticated && (
              <div className="p-4 flex justify-end">
                <button
                  onClick={() => handleDelete(post._id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Cancella
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
