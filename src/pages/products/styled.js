import styled from "styled-components";
import ItemsCarousel from "react-items-carousel";
import { Card, Button, CardBody } from "reactstrap";

export const ProjectCard = styled(Card)`
  display: inline-block;
  height: 360px;
  width: 260px;
  background-color: white;
  margin: auto;
  
  margin-bottom: 10px;
  position: relative;
  box-shadow: 1px 1px 4px 1px #c8d8d8;
  transition: all .2s ease-in-out; 
  @media (min-width:515px){
    margin-left: 10px;
  }
  @media (max-width:515px){
    height:300px;
    width: 200px;
  }
  &&& {
  :hover { 
    transform: scale(1.05); 
    box-shadow: 1px 1px 4px 0px #6C9CC2;
  }
}
`;

export const SliderButton = styled(Button)`
  &&& {
    border-radius: 50%;
    box-shadow: 0 0 4px 1px #c8d8d8;
    
    @media (max-width:515px){
      padding: 2px 10px;
    }
  }
`;

export const Carousel = styled(ItemsCarousel)`
  padding-left: 25%;
  padding-right: 25%;
  button {
    background-color: white;
  }
  overflow: hidden;
`;

export const CardBodyStyled = styled(CardBody)`
  overflow: hidden;
  margin-bottom: 10%;
  max-height: 31%;
`;