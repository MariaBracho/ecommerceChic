import { NavLink } from "react-router-dom";
import { componentType } from "../../utils/types/GeneralTypes";
import { NAVBAR_ROUTER } from "../../utils/constants/navBarRoutes";
import {
  NavbarContainer,
  HomeIcon,
  ShoppingCartIcon,
  CreateProductIcon,
} from "./style";

export default function NavBar(): componentType {
  return (
    <NavbarContainer>
      <NavLink to={NAVBAR_ROUTER.home}>
        <HomeIcon />
      </NavLink>
      <NavLink to={NAVBAR_ROUTER.shoppingCart}>
        <ShoppingCartIcon />
      </NavLink>
      <NavLink to={NAVBAR_ROUTER.home}>
        <CreateProductIcon />
      </NavLink>
    </NavbarContainer>
  );
}
