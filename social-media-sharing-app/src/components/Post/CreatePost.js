import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = () => {
  const [content, setContent] = useState('');
  const [mediaType, setMediaType] = useState('text');
  const [mediaUrl, setMediaUrl] = useState('');

  const handleCreatePost = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/posts', { content, mediaType, mediaUrl });
      console.log('Post created:', response.data);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <form onSubmit={handleCreatePost}>
      <h2>Create Post</h2>
      <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} required />
      <select value={mediaType} onChange={(e) => setMediaType(e.target.value)} required>
        <option value="text">Text</option>
        <option value="image">Image</option>
        <option value="video">Video</option>
      </select>
      {mediaType !== 'text' && (
        <input type="text" placeholder="Media URL" value={mediaUrl} onChange={(e) => setMediaUrl(e.target.value)} required />
      )}
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePost;
