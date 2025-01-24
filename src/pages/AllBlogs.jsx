import React from "react";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { useLocation } from "react-router-dom";

const AllBlogs = () => {
  const { state } = useLocation();
  const posts = state ? state.posts : [];

  const [likedPosts, setLikedPosts] = React.useState({});
  const [dislikedPosts, setDislikedPosts] = React.useState({});

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

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">Bütün Bloglar</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="relative group rounded-xl overflow-hidden shadow-lg bg-white"
          >
            <div className="relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[300px] object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(149, 193, 31, 0.8) 50%, rgba(149, 193, 31, 0) 90%)",
                }}
              ></div>
            </div>
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

export default AllBlogs;
