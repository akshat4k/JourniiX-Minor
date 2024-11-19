import React from 'react'
import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoadingAnimation from '../components/loadingAnimation/LoadingAnimation'

//Pages........
import Login from '../pages/login/Login'
import Signup from '../pages/signup/Signup'
import Home from '../pages/home/Home'
import Profile from '../pages/profile/Profile'
import ChatBox from '../pages/chatbox/ChatBox'
import TripDetails from '../components/tripDetails/TripDetails'

//Components.....
import Nav from '../components/nav/Nav'
import LeftBar from '../components/leftbar/LeftBar'
import RightBar from '../components/rightbar/RightBar'

export default function LayOut() {
  //Feed .........
  const Feed = () => {
    return (
      <>
        <LoadingAnimation />
        <Nav />
        <main>
          <LeftBar />
          <div className="container">
            <Outlet />
          </div>
          <RightBar />
        </main>
      </>
    )
  }

  //Router ........
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to="/login" />,
    },
    {
      path: '/login',
      element: (
        <>
          <LoadingAnimation />
          <Login />
        </>
      ),
    },
    {
      path: '/signup',
      element: (
        <>
          <LoadingAnimation />
          <Signup />
        </>
      ),
    },
    {
      path: '/home',
      element: <Feed />,
      children: [
        {
          path: '',
          element: <Home />
        },
        {
          path: 'profile/:id',
          element: <Profile />
        },
        {
          path: 'chatbox/:id',
          element: <ChatBox />
        },
        {
          path: 'trip/:id',
          element: <TripDetails />
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}