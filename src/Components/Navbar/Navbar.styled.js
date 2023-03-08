import styled from "styled-components";

export const ContainerNavbar = styled.nav`
  //border: solid blueviolet;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  position: relative;
  height: 15%;
  & .options {
    //border: solid;
    font-size: 18px;
    width: 70%;
    display: flex;
    align-items: "center";
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
