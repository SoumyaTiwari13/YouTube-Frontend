import { Link } from 'react-router-dom';

export default function VideoCard({ v }) {
  return (
    <Link className="card" to={`/watch/${v._id}`}>
      <img src={v.thumbnailUrl} alt={v.title} />
      <div className="meta">
        <div style={{fontWeight:600}}>{v.title}</div>
        <div style={{fontSize:12, opacity:.8}}>{v.channel?.channelName || 'Unknown Channel'}</div>
        <div style={{fontSize:12, opacity:.6}}>{v.views ?? 0} views</div>
      </div>
    </Link>
  );
}
