import React, { useState } from 'react';
import axios from 'axios';

const SchedulePost = () => {
  const [postId, setPostId] = useState('');
  const [scheduledTime, setScheduledTime] = useState('');

  const handleSchedulePost = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/schedules', { postId, scheduledTime });
      console.log('Post scheduled:', response.data);
    } catch (error) {
      console.error('Error scheduling post:', error);
    }
  };

  return (
    <form onSubmit={handleSchedulePost}>
      <h2>Schedule Post</h2>
      <input type="text" placeholder="Post ID" value={postId} onChange={(e) => setPostId(e.target.value)} required />
      <input type="datetime-local" value={scheduledTime} onChange={(e) => setScheduledTime(e.target.value)} required />
      <button type="submit">Schedule Post</button>
    </form>
  );
};

export default SchedulePost;
