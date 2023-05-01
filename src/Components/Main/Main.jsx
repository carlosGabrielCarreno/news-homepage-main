import styled from "styled-components";
import { Footer } from "../Footer/Footer";
import { Hero } from "../Hero/Hero";

const MainContainer = styled.main`
  border: solid red;
  width: 90%;
  margin: 0 auto;
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
