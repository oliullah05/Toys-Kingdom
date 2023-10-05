import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import AuthProverders from './Proverders/AuthProverders';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthProverders> <RouterProvider router={router} /></AuthProverders>
  </React.StrictMode>,
)
