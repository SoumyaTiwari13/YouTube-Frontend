import { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function CreateChannel() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [channelId, setChannelId] = useState(null);

  const createChan = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const r = await api.post('/channels', {
      channelName: fd.get('channelName'),
      description: fd.get('description'),
      channelBanner: fd.get('channelBanner')
    });
    setChannelId(r.data._id);
    alert('Channel created! Now add a video below.');
  };

  const addVideo = async (e) => {
    e.preventDefault();
    if (!channelId) return alert('Create a channel first');
    const fd = new FormData(e.currentTarget);
    await api.post('/videos', {
      title: fd.get('title'),
      description: fd.get('description'),
      url: fd.get('url'),
      thumbnailUrl: fd.get('thumbnailUrl'),
      category: fd.get('category') || 'All',
      channelId
    });
    alert('Video added!');
    navigate('/');
  };

  if (!user) return <div style={{padding:24}}>Please sign in.</div>;

  return (
    <div style={{ padding: 16, display: 'grid', gap: 24, maxWidth: 720, margin: '0 auto' }}>
      <section>
        <h2>Create Channel</h2>
        <form onSubmit={createChan} className="comment-box">
          <input name="channelName" placeholder="Channel Name" required />
          <input name="channelBanner" placeholder="Channel Banner URL" />
          <textarea name="description" placeholder="Description" />
          <button className="btn" type="submit">Create Channel</button>
        </form>
      </section>
      <section>
        <h2>Add Video</h2>
        <form onSubmit={addVideo} className="comment-box">
          <input name="title" placeholder="Title" required />
          <input name="thumbnailUrl" placeholder="Thumbnail URL" required />
          <input name="url" placeholder="Video URL" required />
          <input name="category" placeholder="Category (e.g., Education)" />
          <textarea name="description" placeholder="Description" />
          <button className="btn" type="submit">Add Video</button>
        </form>
      </section>
    </div>
  );
}
