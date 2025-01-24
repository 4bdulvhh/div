import React from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

const PostCard = ({ post }) => (
  <div className="group cursor-pointer">
    <div className="relative h-[280px] rounded-xl overflow-hidden">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70">
        <div className="absolute top-4 left-4">
          <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded text-white text-sm">
            {post.category}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white text-xl font-semibold leading-tight">
            {post.title}
          </h3>
        </div>
      </div>
    </div>
    <div className="bg-[#95c11f] rounded-b-xl py-2 px-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <ThumbsUp className="w-5 h-5 text-white" />
        <span className="text-white">{post.likes}</span>
      </div>
      <div className="flex items-center gap-2">
        <ThumbsDown className="w-5 h-5 text-white" />
        <span className="text-white">{post.dislikes}</span>
      </div>
    </div>
  </div>
);

export default PostCard;
