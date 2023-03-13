import styled from "styled-components";
import { News } from "../News/News";
import imgHero from "./../../../assets/images/image-web-3-mobile.jpg";

const HeroContainer = styled.div``;

export const Hero = () => {
  return (
    <HeroContainer>
      <img src={imgHero} alt="hero image" />
      <h1>The Bringht Future of Web 3.0?</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur odio
        eaque dolorum! Rem eveniet ad ab excepturi eaque temporibus. Culpa!
      </p>
      <button>read more</button>
      <News />
    </HeroContainer>
  );
};
