import { useContext, useState } from "react";
import logo from "../../../assets/images/logo.svg";
import openBtn from "../../../assets/images/icon-menu.svg";
import closeBtn from "../../../assets/images/icon-menu-close.svg";
//import { ContainerNavbar } from "./Navbar.styled";
import styled from "styled-components";
import { Context } from "../Context/Context";

const DropdownMenu = styled.ul`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  top: 100%;
  right: 0;
  width: 65%;
  height: 80vh;
  padding: 0;
  margin: 0;
  list-style: none;
  background-color: #ffffff;
  //border: 1px solid #dddddd;
  //box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  //opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;

  li {
    padding: 10px;
    // border-bottom: 1px solid #dddddd;

    &:last-child {
      border-bottom: none;
    }
  }
  @media screen and (min-width: 600px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: solid red;
    position: relative;
    top: 0;
    width: 80%;
    height: 70%;
  }
  @media screen and (min-width: 800px) {
    width: 60%;
  }
`;

const ContainerNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  position: relative;
  height: 15%;
  padding: 0 30px;
  //border: solid;
  margin: 1rem 0;
  & .options {
    font-size: 18px;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & li {
      list-style: none;
      &:hover {
        color: hsl(35, 77%, 62%);
        cursor: pointer;
      }
    }
  }
`;

const Overlay = styled.div`
  display: ${({ modeDesktop }) => (modeDesktop ? "none" : "block")};
  position: absolute;
  top: 0;
  left: 0;
  width: 35%;
  height: 100vh;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10;
  transition: opacity 0.3s ease-in-out;
`;

const IconMenu = styled.img`
  position: relative;
  z-index: 20;
  @media screen and (min-width: 600px) {
    display: none;
  }
`;

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { windowSize } = useContext(Context);

  return (
    <ContainerNavbar>
      <img className="logotype" src={logo} alt="logotype" />
      <IconMenu
        src={isMenuOpen ? closeBtn : openBtn}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      <Overlay isOpen={isMenuOpen} modeDesktop={windowSize.width > 600} />
      <DropdownMenu isOpen={isMenuOpen}>
        <li>Home</li>
        <li>New</li>
        <li>Popular</li>
        <li>Trending</li>
        <li>Categories</li>
      </DropdownMenu>
    </ContainerNavbar>
  );
};
