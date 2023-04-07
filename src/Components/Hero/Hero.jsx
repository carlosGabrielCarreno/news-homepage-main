import styled from "styled-components";
import { News } from "../News/News";
import imgHero from "./../../../assets/images/image-web-3-mobile.jpg";
import imgHeroDesktop from "./../../../assets/images/image-web-3-desktop.jpg";
import { Context } from "../Context/Context";
import { useContext } from "react";

const HeroContainer = styled.div`
  & .img {
    width: 100%;
    height: 300px;
  }
  & .h1 {
    font-weight: 700;
    font-size: 3rem;
  }
  & .btn-primary {
    background-color: hsl(5, 85%, 63%);
    color: hsl(36, 100%, 99%);
    letter-spacing: 5px;
    padding: 15px;
    font-weight: 600;
    border: 0;
    text-transform: uppercase;
    margin: 5px 0;
    :hover {
      cursor: pointer;
      background-color: hsl(240, 100%, 5%);
    }
  }
  @media screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Crea 3 columnas de igual tamaño */
    grid-template-rows: repeat(
      2,
      auto
    ); /* Crea 2 filas con altura automática */
    & .img {
      grid-column: 1 / 3;
      grid-row: 1;
      max-width: 100%;
      max-height: 100%;
    }
    & .h1 {
      grid-column: 1;
      grid-row: 2;
      margin: 0;
      padding: 0;
    }
    & .container-btn-and-text {
      grid-column: 2;
      grid-row: 2;
    }
    & .ContainerNews {
      grid-column: 3;
      grid-row: 1 / 3;
      color: #fff;
      height: 100%;
      border: solid green;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      & .new {
        background-color: hsl(240, 100%, 5%);
      }
    }
  }
`;

const ContainerNews = styled.div`
  /*border: solid gold;
Primary
Soft orange: hsl(35, 77%, 62%)
Soft red: hsl(5, 85%, 63%)
Neutral
Off-white: hsl(36, 100%, 99%) 
Grayish blue: hsl(233, 8%, 79%) 
Dark grayish blue: hsl(236, 13%, 42%) 
Very dark blue: hsl(240, 100%, 5%)
*/
  color: #fff;
  & .new {
    background-color: hsl(240, 100%, 5%);
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
      <div className="container-btn-and-text">
        <p className="p">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
          odio eaque dolorum! Rem eveniet ad ab excepturi eaque temporibus.
          Culpa!
        </p>
        <button className="btn-primary">read more</button>
      </div>

      <div className="ContainerNews">
        <div className="new">
          <h2>New</h2>
          <h3>Hydrogen VS Electric Cars</h3>
        </div>
        <div className="new">
          <h2>The Downsides of Al Artistry</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            repudiandae aliquam harum quos voluptatum autem provident corrupti
            ab neque id.
          </p>
        </div>
        <div className="new">
          <h2>Is VC Funding Drying Up</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos ex
            nisi incidunt suscipit eaque accusamus voluptate, velit architecto
            quam animi!
          </p>
        </div>
      </div>
    </HeroContainer>
  );
};
