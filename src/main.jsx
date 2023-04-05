import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import NuevoCliente, {action, action as nuevoClienteNuevo} from './pages/NuevoCliente'
import Index,{loader as clientesLoader} from './pages/Index'
import EditarClientes,{loader as editarClienteLoader, action as editarClienteAction} from './pages/EditarClientes'
import ErrorPage from './components/ErrorPage'
import {action as eliminarClienteAction} from './components/Cliente'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index:true,            //Aqui no se define path porque es la pagina inial
        element: <Index />,
        loader: clientesLoader,
        errorElement: <ErrorPage />
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente />,
        action:nuevoClienteNuevo,
        errorElement: <ErrorPage />
      },
      {
        path: '/clientes/:clienteId/editar',
        element:<EditarClientes />,
        loader: editarClienteLoader,
        action:editarClienteAction,
        errorElement: <ErrorPage />
      },
      {
        path: '/clientes/:clienteId/eliminar',
        action:eliminarClienteAction

      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
