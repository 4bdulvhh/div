import React from 'react';

const PostHeader = () => (
  <div className="bg-gray-100 py-20 relative overflow-hidden">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
      <div className="flex gap-4">
        <button className="bg-yellow-400 hover:bg-yellow-500 px-6 py-2 rounded-md font-medium">
          Ətraflı
        </button>
        <button className="bg-yellow-400 hover:bg-yellow-500 px-6 py-2 rounded-md font-medium">
          İndi qeydiyyatdan keç
        </button>
      </div>
    </div>
    <div className="absolute right-0 top-0 w-1/3 h-full">
      <div className="relative w-full h-full">
        <div className="absolute inset-0 bg-yellow-400 transform rotate-12 translate-x-1/4"></div>
        <img 
          src="/api/placeholder/600/400" 
          alt="Blog header"
          className="absolute inset-0 rounded-full transform -translate-x-1/4"
        />
      </div>
    </div>
  </div>
);

export default PostHeader;
