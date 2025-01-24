import React, { useState } from "react";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

const Blog = () => {
  const [likedPosts, setLikedPosts] = useState({});
  const [dislikedPosts, setDislikedPosts] = useState({});
  const navigate = useNavigate(); // Initialize the navigate function for redirection

  const posts = [
    {
      id: 1,
      title: "Kibertəhlükəsizlik: Gözəgörünməz Təhlükələr",
      category: "BLOG",
      image: "/images/blog1.jpg",
    },
    {
      id: 2,
      title: "Gününü Proqramlaşdır",
      category: "BLOG",
      image: "/images/blog2.png",
    },
    {
      id: 3,
      title: "Marketinqin Böyük Üçlüsü",
      category: "BLOG",
      image: "/images/blog3.jpeg",
    },
    {
      id: 4,
      title: "Süni İntellekt və Proqramlaşdırma",
      category: "BLOG",
      image: "/images/blog5.jpeg",
    },
    {
      id: 5,
      title: "Kodlaşdırma ilə Gələcəyə Addım",
      category: "BLOG",
      image: "/images/blog6.jpg",
    },
    {
      id: 6,
      title: "Robot Texnologiyaları və Cəmiyyət",
      category: "BLOG",
      image: "/images/blog4.jpeg",
    },
  ];

  const handleLike = (postId) => {
    setLikedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
    if (dislikedPosts[postId]) {
      setDislikedPosts((prev) => ({
        ...prev,
        [postId]: false,
      }));
    }
  };

  const handleDislike = (postId) => {
    setDislikedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
    if (likedPosts[postId]) {
      setLikedPosts((prev) => ({
        ...prev,
        [postId]: false,
      }));
    }
  };

  const handleShowAllBlogs = () => {
    navigate("/all-blogs", { state: { posts } }); // Pass posts data to the "All Blogs" page
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Bloglar</h2>
        <button
          onClick={handleShowAllBlogs}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Bütün Blogları Göstər
        </button>
      </div>

      {/* Grid sistemi - 3 kart görünür */} 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.slice(0, 3).map((post) => (
          <div
            key={post.id}
            className="relative group rounded-xl overflow-hidden shadow-lg bg-white"
          >
            {/* Şəkil */}
            <div className="relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[300px] object-cover"
              />
              {/* Aşağıdan yuxarıya doğru yaşıl kölgə */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(149, 193, 31, 0.8) 50%, rgba(149, 193, 31, 0) 90%)",
                }}
              ></div>
            </div>

            {/* Məzmun */}
            <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
              <div>
                <span className="bg-black/50 px-3 py-1 rounded text-sm">
                  {post.category}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">{post.title}</h3>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => handleLike(post.id)}
                    className={`transition-colors duration-200 ${
                      likedPosts[post.id]
                        ? "text-blue-500"
                        : "text-white hover:text-blue-400"
                    }`}
                  >
                    <ThumbsUp className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => handleDislike(post.id)}
                    className={`transition-colors duration-200 ${
                      dislikedPosts[post.id]
                        ? "text-red-500"
                        : "text-white hover:text-red-400"
                    }`}
                  >
                    <ThumbsDown className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
