import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from '../services/api';
import VideoCard from '../components/VideoCard';
import Filters from '../components/Filters';

export default function Home() {
  const [videos, setVideos] = useState([]);
  const [cat, setCat] = useState('All');
  const [params] = useSearchParams();

  const fetchVideos = async () => {
    const q = params.get('q') || '';
    const r = await api.get('/videos', { params: { search: q, category: cat } });
    setVideos(r.data);
  };

  useEffect(() => { fetchVideos(); /* eslint-disable-next-line */ }, [cat, params]);

  return (
    <>
      <Filters value={cat} onChange={setCat} />
      <div className="grid">
        {videos.map(v => <VideoCard key={v._id} v={v} />)}
      </div>
    </>
  );
}
