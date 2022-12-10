import { NavLink } from "react-router-dom";
import { componentType } from "../../shared/types/GeneralTypes";
import { NAVBAR_ROUTER } from "../../shared/constants/navBarRoutes";
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
