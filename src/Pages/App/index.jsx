import { useContext } from "react";
import { BrowserRouter, Navigate, useRoutes } from "react-router-dom";
import { ShoppingCartContext, ShoppingCartProvider } from "../../Context";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import Navbar from "../../Components/Navbar";
import Layout from "../../Components/Layout";
import Checkout from "../../Components/Checkout";
import SignUp from "../SignUp";
import MobileMenu from "../../Components/MobileMenu";

const ProtectedRoute = ({ element, isLoggedIn }) => {
  if (isLoggedIn) {
    return element;
  } else {
    return <Navigate to={"/sign-in"} />;
  }
};

const AppRoutes = () => {
  const { loggedIn } = useContext(ShoppingCartContext);
  let routes = useRoutes([
    {
      path: "/",
      element: <ProtectedRoute element={<Home />} isLoggedIn={loggedIn} />,
    },
    {
      path: "/:category",
      element: <ProtectedRoute element={<Home />} isLoggedIn={loggedIn} />,
    },
    {
      path: "/my-account",
      element: <ProtectedRoute element={<MyAccount />} isLoggedIn={loggedIn} />,
    },
    {
      path: "/my-orders",
      element: <ProtectedRoute element={<MyOrders />} isLoggedIn={loggedIn} />,
    },
    {
      path: "/my-orders/:id",
      element: <ProtectedRoute element={<MyOrder />} isLoggedIn={loggedIn} />,
    },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/sign-up", element: <SignUp /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return routes;
};
ShoppingCartProvider;
const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar />
        <Checkout />
        <MobileMenu />
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default App;
