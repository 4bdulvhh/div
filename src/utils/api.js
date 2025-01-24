// utils/api.js-ə əlavə edin
export const blogAPI = {
    getBlogs: () => fetch('/api/blogs').then(res => res.json()),
    getBlogPost: (slug) => fetch(`/api/blogs/${slug}`).then(res => res.json()),
    addComment: (blogId, comment) => fetch(`/api/blogs/${blogId}/comments`, {
      method: 'POST',
      body: JSON.stringify(comment)
    }).then(res => res.json()),
  };