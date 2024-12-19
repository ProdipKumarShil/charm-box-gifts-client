import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ProductsPage from "../pages/ProductsPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import DashboardLayout from "../layouts/DashboardLayout";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/products',
        element: <ProductsPage />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/about',
        element: <AboutUs />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  },
  {
    path: 'dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: 'profile'
      }
    ]
  }
])