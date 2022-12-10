import NavBar from "../Navbar";
import Header from "../Header";
import { Outlet } from "react-router";
import { SectionContainer, AppContainer } from "./style";

export default function Layout(): JSX.Element {
  return (
    <AppContainer>
      <Header />
      <SectionContainer>
        <Outlet />
      </SectionContainer>
      <NavBar />
    </AppContainer>
  );
}
