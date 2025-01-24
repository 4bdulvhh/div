// src/components/blog/PostList.jsx

import React from 'react';
import PostCard from './PostCard';
import { postsData } from '../../data/postsData';  

const PostList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {postsData.map((post) => (
        <PostCard key={post.id} {...post} /> 
      ))}
    </div>
  );
};

export default PostList;