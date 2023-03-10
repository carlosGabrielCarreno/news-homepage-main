import styled from "styled-components";
import { Footer } from "../Footer/Footer";
import { Hero } from "../Hero/Hero";

const MainContainer = styled.main`
  border: solid red;
  width: 100%;
  height: 50%;
`;

export const Main = () => {
  return (
    <MainContainer>
      <Hero />
      <Footer />
    </MainContainer>
  );
};
