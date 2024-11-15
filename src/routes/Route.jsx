import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../authenticate/Login";
import Register from "../authenticate/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/products",
        element: <Products/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact-us",
        element: <Contact/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/register",
        element: <Register/>,
      }
    ]
  },
]);

export default router;
