import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './components/Home'
import './index.css'
import SearchWhileWriting from './SearchWhileWriting'
import { SearchWithAButton } from './SearchWithAButton'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/search-while-writing',
    element: <SearchWhileWriting />
  },
  {
    path: '/search-with-a-button',
    element: <SearchWithAButton />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
