import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import VideoPlayer from './pages/VideoPlayer';
import Channel from './pages/Channel';
import CreateChannel from './pages/CreateChannel';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'signin', element: <SignIn /> },
      { path: 'watch/:id', element: <VideoPlayer /> },
      { path: 'channel', element: <ProtectedRoute><Channel /></ProtectedRoute> },
      { path: 'channel/create', element: <ProtectedRoute><CreateChannel /></ProtectedRoute> },
      { path: '*', element: <NotFound /> }
    ]
  }
]);
