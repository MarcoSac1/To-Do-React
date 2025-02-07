import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import CompletedTask from './CompletedTask.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    // errorElement:<Error/>
  },
  {
    path:'/completed',
    element:<CompletedTask completedTasks={[]} />,
    // errorElement:<Error/>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)