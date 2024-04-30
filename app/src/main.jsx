import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppContext from './context/AppContext.jsx'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import Products from './Products.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/products",
    element: <Products />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContext>
      <RouterProvider router={router} />
    </AppContext>
  </React.StrictMode>,
)
