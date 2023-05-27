import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// configurando router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pags/Home.jsx'
import Contato from './pags/Contato.jsx'
import ErrorPage from './pags/ErrorPage.jsx'
import Sobre from './pags/Sobre.jsx'
import Servicos from './pags/Servicos.jsx' 
import Login from './pags/Login.jsx'

//Definição de URL a ser carregada 
const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
      path: 'contato',
      element: <Contato />
      },
      {
      path: '/',
      element: <Home />
      },
      {
        path: 'sobre',
        element: <Sobre />
      },
      {
        path: 'servicos',
        element: <Servicos />
      },
      {
        path: 'login',
        element: <Login/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
