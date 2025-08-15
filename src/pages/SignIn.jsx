import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function SignIn() {
  const { login, register } = useAuth();
  const navigate = useNavigate();
  const [mode, setMode] = useState('login');
  const GOOGLE_FORM_URL = import.meta.env.VITE_GOOGLE_FORM_URL;

  const onSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const email = fd.get('email');
    const password = fd.get('password');
    const username = fd.get('username');
    if (mode === 'login') await login(email, password);
    else await register(username, email, password);
    navigate('/');
  };

  return (
    <div style={{ padding: 24, maxWidth: 420, margin: '40px auto' }}>
      <h2>{mode === 'login' ? 'Sign In' : 'Register'}</h2>
      <p style={{opacity:.8, fontSize:14, marginBottom:12}}>
        Want a Google Form style? <a href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer">Open external Google Form</a>
      </p>
      <form onSubmit={onSubmit} className="comment-box">
        {mode === 'register' && <input className='text' name="username" placeholder="Username" required />}
        <input className="text" name="email" placeholder="Email" type="email" required />
        <input className="text" name="password" placeholder="Password" type="password" required />
        <button className="text" type="submit">{mode === 'login' ? 'Sign In' : 'Create Account'}</button>
      </form>
      <button className="text" style={{marginTop:10}} onClick={() => setMode(mode==='login'?'register':'login')}>
        {mode === 'login' ? 'Create an account' : 'Have an account? Sign in'}
      </button>
    </div>
  );
}
