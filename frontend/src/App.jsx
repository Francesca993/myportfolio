import React from "react";
import "./index.css"; // Tailwind styles are imported here
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import { useState, useEffect } from "react";
import CreatePostPage from "./pages/CreatePostPage";
import BlogPage from "./pages/BlogPage";
import PostDetailPage from "./pages/PostDetailPage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <Navbar
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      <div className="pt-14"></div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route
          path="/login"
          element={<LoginPage setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/create-post"
          element={
            isAuthenticated ? (
              <CreatePostPage />
            ) : (
              <LoginPage setIsAuthenticated={setIsAuthenticated} />
            )
          }
        />
        <Route
          path="/create-post"
          element={isAuthenticated ? <CreatePostPage /> : <LoginPage />}
        />
        <Route path="/posts" element={<BlogPage />} />
        <Route path="/posts/:id" element={<PostDetailPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
