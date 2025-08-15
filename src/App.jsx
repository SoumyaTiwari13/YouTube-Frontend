import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

export default function App() {
  const [hide, setHide] = useState(false);
  return (
    <>
      <Header onToggleSidebar={() => setHide(!hide)} />
      <div className="layout">
        <Sidebar hidden={hide} />
        <main><Outlet /></main>
      </div>
    </>
  );
}
