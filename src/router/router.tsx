import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ProductsPage from "../pages/ProductsPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import DashboardLayout from "../layouts/DashboardLayout";
import Profile from "../pages/dashboard/Profile";
import AllProducts from "../pages/dashboard/admin/AllProducts";
import AllUsers from "../pages/dashboard/admin/AllUsers";
import Overview from "../pages/dashboard/admin/Overview";
import Cart from "../pages/dashboard/buyer/Cart";
import WishList from "../pages/dashboard/buyer/WishList";
import EditProducts from "../pages/dashboard/seller/EditProducts";
import MyProducts from "../pages/dashboard/seller/MyProducts";
import AddProduct from "../pages/dashboard/AddProduct";

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
        path: 'profile',
        element: <Profile />
      },
      {
        path: 'add-product',
        element: <AddProduct />
      },
      // admin routes
      {
        path: 'all-products',
        element: <AllProducts />
      },
      {
        path: 'all-users',
        element: <AllUsers />
      },
      {
        path: 'overview',
        element: <Overview />
      },
      // buyer routes
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'wishlist',
        element: <WishList />
      },
      // seller
      {
        path: 'edit-product',
        element: <EditProducts />
      },
      {
        path: 'my-products',
        element: <MyProducts />
      }
    ]
  }
])