import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import { router } from './Routers/Routes.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <div className="max-w-screen-xl mx-auto">
     <RouterProvider router={router} />
     </div>
     </AuthProvider>
  </React.StrictMode>,
)
