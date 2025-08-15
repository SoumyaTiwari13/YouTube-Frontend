import { Link } from 'react-router-dom';

export default function Sidebar({ hidden }) {
  return (
    <aside className={`sidebar ${hidden ? 'hidden' : ''}`}>
      <nav style={{ display: 'grid', gap: 8 }}>
        <Link to="/">Home</Link>
        <Link to="/channel">Channel</Link>
        <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
      </nav>
    </aside>
  );
}
