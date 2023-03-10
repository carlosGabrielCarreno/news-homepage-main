import imgRetroOne from "../../../assets/images/image-retro-pcs.jpg";
import styled from "styled-components";

const FooterContainer = styled.footer``;

export const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer-card">
        <img src={imgRetroOne} alt="" />
        <h2>01</h2>
        <h3>Reviving Retro PCs</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
          voluptatum.
        </p>
      </div>
      <div className="footer-card">
        <img src={imgRetroOne} alt="" />
        <h2>01</h2>
        <h3>Reviving Retro PCs</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
          voluptatum.
        </p>
      </div>
      <div className="footer-card">
        <img src={imgRetroOne} alt="" />
        <h2>01</h2>
        <h3>Reviving Retro PCs</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
          voluptatum.
        </p>
      </div>
    </FooterContainer>
  );
};
