import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// configurando router
// Importando bibliotecas? 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Para definir e carregar as rotas, antes devem ser importadas aqui
import Home from './routes/Home.jsx'
import Contato from './routes/Contato.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import Menu from './components/menu/menu.jsx'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />
//   },
//   {
//     path: 'contato',
//     element: <Contato />
//   }
// ]);


// Definição da url das rotas a serem carregadas
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
      path: '/',
      element: <Home />
      },
      {
      path: 'contato',
      element: <Contato />
      },
    ],
  },
]);

// ??
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
