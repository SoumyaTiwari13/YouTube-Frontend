import { createContext, useContext, useEffect, useState } from 'react';
import api from '../services/api';

const AuthCtx = createContext(null);
export const useAuth = () => useContext(AuthCtx);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return setReady(true);
    api.get('/auth/me').then(r => { setUser(r.data.user); setReady(true); })
      .catch(() => { localStorage.removeItem('token'); setReady(true); });
  }, []);

  const login = async (email, password) => {
    const r = await api.post('/auth/login', { email, password });
    localStorage.setItem('token', r.data.token);
    setUser(r.data.user);
  };

  const register = async (username, email, password) => {
    const r = await api.post('/auth/register', { username, email, password });
    localStorage.setItem('token', r.data.token);
    setUser(r.data.user);
  };

  const logout = () => { localStorage.removeItem('token'); setUser(null); };

  return <AuthCtx.Provider value={{ user, ready, login, register, logout }}>{children}</AuthCtx.Provider>;
}
