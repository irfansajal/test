import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './components/Home'
import About from './components/About'
import ErrorPage from './components/ErrorPage'
import Shop from './components/Shop'
import Cart from './components/Cart'
import { productsAndCartData } from './Loaders/getCard&ProductData'


const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        errorElement:<ErrorPage></ErrorPage>,
        loader: productsAndCartData,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
               path:'about',
               element:<About></About>
            },
            {
                path:'shop',
                element:<Shop></Shop>,
               
               
            },
            {
                path:'cart',
                element:<Cart></Cart>,
                
            }
        ]


    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
       <Toaster></Toaster>
       <RouterProvider router={router}/>
    </>
)
