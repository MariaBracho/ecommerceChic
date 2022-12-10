import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NAVBAR_ROUTER } from "../shared/constants/navBarRoutes";

// components
import Home from "../pages/Home";
import Layout from "../components/Layout";
import ShoppingCart from "../pages/ShoppingCart";

export default function Navigation(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={NAVBAR_ROUTER.home} element={<Home />} />
          <Route path={NAVBAR_ROUTER.shoppingCart} element={<ShoppingCart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
