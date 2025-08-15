import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import { useAuth } from '../context/AuthContext';

export default function VideoPlayer() {
  const { id } = useParams();
  const { user } = useAuth();
  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState([]);

  const load = async () => {
    const [v, c] = await Promise.all([
      api.get(`/videos/${id}`),
      api.get(`/videos/${id}/comments`)
    ]);
    setVideo(v.data);
    setComments(c.data);
  };

  useEffect(() => { load(); /* eslint-disable-next-line */ }, [id]);

  const react = async (action) => {
    await api.post(`/videos/${id}/like`, null, { params: { action } });
    load();
  };

  const addComment = async (e) => {
    e.preventDefault();
    const text = new FormData(e.currentTarget).get('text');
    if (!text) return;
    await api.post(`/videos/${id}/comments`, { text });
    e.currentTarget.reset();
    load();
  };

  const editComment = async (cid) => {
    const text = prompt('Edit your comment:');
    if (!text) return;
    await api.put(`/comments/${cid}`, { text });
    load();
  };

  const deleteComment = async (cid) => {
    if (!confirm('Delete comment?')) return;
    await api.delete(`/comments/${cid}`);
    load();
  };

  if (!video) return <div className="player">Loading…</div>;

  const likes = video.likedBy?.length ?? 0;
  const dislikes = video.dislikedBy?.length ?? 0;

  return (
    <div className="player">
      <video controls src={video.url} poster={video.thumbnailUrl} />
      <h2>{video.title}</h2>
      <div className="row" style={{gap:16}}>
        <div>{video.channel?.channelName}</div>
        <button className="btn" onClick={() => react('like')}>👍 {likes}</button>
        <button className="btn" onClick={() => react('dislike')}>👎 {dislikes}</button>
      </div>
      <p style={{opacity:.9}}>{video.description}</p>

      <h3>Comments</h3>
      {user && (
        <form className="comment-box" onSubmit={addComment}>
          <textarea name="text" placeholder="Add a comment..." />
          <button className="btn" type="submit">Comment</button>
        </form>
      )}
      <div style={{display:'grid', gap:12}}>
        {comments.map(c => (
          <div key={c._id} style={{border:'1px solid #222', padding:12, borderRadius:8}}>
            <div style={{fontWeight:600}}>{c.user?.username || 'User'}</div>
            <div>{c.text}</div>
            {user && c.user && c.user._id === user.id && (
              <div className="row" style={{gap:8, marginTop:8}}>
                <button className="btn" onClick={() => editComment(c._id)}>Edit</button>
                <button className="btn" onClick={() => deleteComment(c._id)}>Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
