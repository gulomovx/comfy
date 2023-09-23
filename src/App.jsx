// rrd
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// pages and layoutes
import {
  About,
  Cart,
  CheckOut,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from "./page";

import { ErrorElement } from './components'
import {loader as landingLoader} from './page/Landing'
import {loader as singleProductLoader} from './page/SingleProduct'
import {loader as productsLoader} from './page/Products'
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
          loader: landingLoader,
          errorElement: <ErrorElement />
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "orders",
          element: <Orders />,
        },
        {
          path: "products",
          element: <Products />,
          loader: productsLoader,
          errorElement:<errorElement/>
        },
        {
          path: "products/:id",
          element: <SingleProduct />,
          errorElement: <ErrorElement />,
          loader:singleProductLoader

        },
        {
          path: "cart",
          element: <Cart/>,
        },
        {
          path: "checkout",
          element: <CheckOut />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <Error />,
    },
    {
      path: "/register",
      element: <Register />,
      errorElement: <Error />,
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;