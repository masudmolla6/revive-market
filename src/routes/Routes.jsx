import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AllProducts from "../Pages/AllProducts/AllProducts";
import Products from "../Pages/Products/Products";
import Cart from "../Pages/Cart/Cart";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      { path: "/login", element: <Login></Login> },
      { path: "/signup", element: <SignUp></SignUp> },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/usedProducts/:id",
        element: <AllProducts></AllProducts>,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/usedProducts/${params.id}`);
        },
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <h1 className="text-3xl text-center">404 Not Found !!!</h1>,
  },
]);

export default router;