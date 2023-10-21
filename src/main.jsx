import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Components/MainLayout/MainLayout.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Home from './Components/Home/Home';
import AddProduct from './Components/AddProduct/AddProduct';
import MyCart from './Components/MyCart/MyCart';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import CategoriesProducts from './Components/Home/CategoriesProducts';
import UpdateProduct from './Components/UpdateProduct/UpdateProduct';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import AuthProvider from './Components/Provider/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/addProduct',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: '/myCart',
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader: () => fetch('https://assignment-server-nyuet8m6h-coadings-projects.vercel.app/cartInfoDelete')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/categoriesProducts/:brand_name',
        element: <PrivateRoute><CategoriesProducts></CategoriesProducts></PrivateRoute>,
        loader: () => fetch('https://assignment-server-nyuet8m6h-coadings-projects.vercel.app/products')
      },
      {
        path: '/updateProduct/:id',
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader: ({ params }) => fetch(`https://assignment-server-nyuet8m6h-coadings-projects.vercel.app/products/${params.id}`)
      },
      {
        path: '/productDetail/:id',
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://assignment-server-nyuet8m6h-coadings-projects.vercel.app/products/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
