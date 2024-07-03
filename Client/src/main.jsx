import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UserLogin from './User/Views/UserLogin.jsx'
import UserRegister from './User/Views/UserRegister.jsx'
import TaskView from './Task/Views/TaskView.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <UserLogin />
  },
  {
    path: '/register',
    element: <UserRegister />
  },
  {
    path: '/task',
    element: <TaskView />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/> 
  </React.StrictMode>,
)
