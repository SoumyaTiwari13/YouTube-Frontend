import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Header({ onToggleSidebar }) {
  const { user, logout } = useAuth();
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();

  const onSearch = (e) => {
    if (e.key === 'Enter') {
      params.set('q', e.target.value);
      navigate({ pathname: '/', search: params.toString() });
    }
  };

  return (
    <header className="header">
      <button className="btn" onClick={onToggleSidebar}>☰</button>
      <img src="logo.png" alt="youtube logo"  id='logo'/>
      <Link to="/"><strong className='Heading'>YouTube</strong></Link>
      <input placeholder="Search" defaultValue={params.get('q') || ''} onKeyDown={onSearch} />
      {user ? (
        <div className="row" style={{marginLeft:'auto', gap:12}}>
          <span>Hello, {user.username}</span>
          <Link className="btn" to="/channel">My Channel</Link>
          <button className="btn" onClick={logout}>Logout</button>
        </div>
      ) : (
        <Link to="/signin" className="btn" style={{ marginLeft: 'auto' }}>Sign In</Link>
      )}
    </header>
  );
}
