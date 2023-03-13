import styled from "styled-components";

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

export const News = () => {
  return (
    <ContainerNews>
      <div className="new">
        <h2>New</h2>
        <h3>Hydrogen VS Electric Cars</h3>
      </div>
      <div className="new">
        <h2>The Downsides of Al Artistry</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          repudiandae aliquam harum quos voluptatum autem provident corrupti ab
          neque id.
        </p>
      </div>
      <div className="new">
        <h2>Is VC Funding Drying Up</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos ex nisi
          incidunt suscipit eaque accusamus voluptate, velit architecto quam
          animi!
        </p>
      </div>
    </ContainerNews>
  );
};
