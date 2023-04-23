import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import { Search } from './components/Search.jsx'

import './index.scss'

const router = createBrowserRouter([
  { path: "/", element: <App/>, errorElement:<></>},
  { path: "/items", element: <Search/>, errorElement:<></>}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
)
