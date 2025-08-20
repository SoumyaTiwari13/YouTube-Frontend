import { createBrowserRouter } from "react-router-dom";

import Home from "/src/pages/Home";
import Layout from "./layout/Layout";
import Login from "/src/pages/Login";
import Signup from "/src/pages/Signup";
import Shorts from "/src/pages/Shorts";
import Subscriptions from "/src/pages/Subscriptions";
import VideoPlayer from "/src/pages/VideoPlayer";
import ErrorPage from "/src/pages/ErrorPage";
import YourProfile from "/src/pages/yourProfile";
import ChannlePage from "/src/pages/ChannelPage";



const appRoute = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true, element: <Home /> 
      },
      {
        path: '/login', element: (
            <Login />
      )
      },
      {
        path: '/signin', element: <Signup />
      },
      {
        path: '/watch/:id', element: <VideoPlayer />
      },
      {
        path: '/shorts', element: <Shorts />
      },
      {
        path: '/Subscriptions', element: <Subscriptions />
      },
      {
        path: '/profile', element: <YourProfile />
      },
      {
        path: '/in/:channelName', element: <ChannlePage />
      },
    ],
    errorElement:<ErrorPage />
  }
]);

export default appRoute
