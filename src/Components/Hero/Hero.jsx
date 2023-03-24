import styled from "styled-components";
import { News } from "../News/News";
import imgHero from "./../../../assets/images/image-web-3-mobile.jpg";
import imgHeroDesktop from "./../../../assets/images/image-web-3-desktop.jpg";
import { Context } from "../Context/Context";
import { useContext } from "react";

const HeroContainer = styled.div`
  @media screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Crea 3 columnas de igual tamaño */
    grid-template-rows: repeat(
      2,
      auto
    ); /* Crea 2 filas con altura automática */
    & .img {
      grid-column: 1 / 2;
      grid-row: 1;
    }
    & .h1 {
      grid-column: 1;
      grid-row: 2;
    }
    & .p {
      grid-column: 2;
      grid-row: 2;
    }
  }
`;

export const Hero = () => {
  const { windowSize } = useContext(Context);
  return (
    <HeroContainer>
      <img
        className="img"
        src={windowSize.width < 600 ? imgHero : imgHeroDesktop}
        alt="hero image"
      />
      <h1 className="h1">The Bringht Future of Web 3.0?</h1>
      <p className="p">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur odio
        eaque dolorum! Rem eveniet ad ab excepturi eaque temporibus. Culpa!
      </p>
      <button>read more</button>
      <News />
    </HeroContainer>
  );
};
