import { ContainerNavbar } from "./Navbar.styled";
import logo from "../../../assets/images/logo.svg";

export const Navbar = () => {
  return (
    <ContainerNavbar>
      <img className="logotype" src={logo} alt="logotype" />
    </ContainerNavbar>
  );
};
