import 'boxicons/css/boxicons.min.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import Services from './components/service/Services.jsx'
import Project from './components/work/Project.jsx'
import './index.css'


const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>
  },
  {
    path:'/about',
    element: <About/>
  },
  {
    path: '/services',
    element: <Services/>
  },
  {
    path: '/projects',
    element: <Project/>
  },
  {
    path: '/contact',
    element: <Contact/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
