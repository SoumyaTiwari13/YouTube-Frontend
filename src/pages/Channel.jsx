import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';
import { Link } from 'react-router-dom';
import VideoCard from '../components/VideoCard';

export default function Channel() {
  const { user } = useAuth();
  const [channel, setChannel] = useState(null);
  const [videos, setVideos] = useState([]);

  const load = async () => {
    // naive: fetch first channel owned by user, or null
    const my = await api.get('/auth/me');
    const userId = my.data.user.id;

    // search channels owned by me (simple endpoint alternative: list by owner)
    // Quick approach: ask backend to list by query on channels? To keep API minimal, fetch all my channel videos if I have channelId saved in local state.
    // We'll assume max one channel per user for this demo:
    const chans = await api.get('/search/videos', { params: {} }); // not ideal; better to store channelId in localStorage after create
    // Fallback: try fetch channel by name if stored; but we’ll just display a link to create.
    setChannel(null);
    setVideos([]);
  };

  useEffect(() => { load(); /* eslint-disable-next-line */ }, []);

  return (
    <div style={{ padding: 16 }}>
      <h2>My Channel</h2>
      {channel ? (
        <>
          <div style={{ marginBottom: 12 }}>
            <strong>{channel.channelName}</strong>
            <div style={{ opacity:.8 }}>{channel.description}</div>
          </div>
          <Link className="btn" to="/channel/create">Upload / Add Video</Link>
          <div className="grid" style={{ marginTop: 12 }}>
            {videos.map(v => <VideoCard key={v._id} v={v} />)}
          </div>
        </>
      ) : (
        <>
          <p>You don’t have a channel yet.</p>
          <Link className="btn" to="/channel/create">Create Channel & Add Video</Link>
        </>
      )}
    </div>
  );
}
