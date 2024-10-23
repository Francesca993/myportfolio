import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function PostDetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
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

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-4">
        {new Date(post.createdAt).toLocaleDateString()}
      </p>

      {post.images && post.images.length > 0 && (
        <img
          src={`http://localhost:4505/${post.images[0]}`}
          alt={post.title}
          className="w-full h-auto mb-4"
        />
      )}

      <p className="text-lg leading-relaxed">{post.content}</p>
    </div>
  );
}
