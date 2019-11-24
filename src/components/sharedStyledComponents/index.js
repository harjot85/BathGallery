import styled from "styled-components";
import { Row, Col, Input, Label, Button } from "reactstrap";

export const InformationBar = styled.div`
  width: 100%;
  height: 3rem;
  background-color: black;
  color: white;
  vertical-align: middle;
  line-height: 3rem;
  text-align: center;
`;

export const ProductCardContainer = styled.div`
  height: ${props => props.height || "25rem"};
  width: ${props => props.width || "100%"};
  border-top: 2px solid #f1f1f1;
  border-radius: 0.2rem;
  margin: 0 auto;
  background-color: white;
  display: inline-flex;
`;

export const ProductCard = styled.div`
  margin: 2em;
  border: 1px solid #f1f1f1;
  padding: 0;
  min-height: 180px;
  width: min-content;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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

export const RowStyled = styled(Row)`
  margin-top: ${props => props.margintop || "1rem"};
  margin-bottom: ${props => props.marginBottom || "auto"};
  &&& {
    margin-right: ${props => props.marginright || "4rem"};
    margin-left: ${props => props.marginleft || "4rem"};
    
  }
  
`;

export const ColStyled = styled(Col)`
  margin: ${props => props.margin || "0"};
  &&& {
    padding: ${props => props.padding || "0"};
  }
  margin-top: ${props => props.margintop || "2rem"};
  margin-bottom: ${props => props.marginbottom || "0"};
  
`;

export const Section = styled.div`
  margin-top: ${props => props.margintop || "5rem"};
  background-image: ${props => `url(${props.bgImage})` || ""};
  &&& {
    padding: ${props => props.padding};
  }
`;

export const H3 = styled.h3`
  color: ${props => props.inputColor || "white"};
  opacity: 1;
  text-align: center;
  vertical-align: middle;
  font-family: "Open Sans", sans-serif;
  font-size: ${props => props.inputFontSize || "1.75em"};

  @media (max-width: 700px) {
    font-size: 16px;
  }
`;

export const ButtonStyled = styled(Button)`
  margin-left: 1rem;
  min-width: 100px;
  &&&{
  width: 200px;
  }
`;

export const LabelStyled = styled(Label)`
  margin-top: 1rem;
`;

export const InputStyled = styled(Input)`
  &&& {
    border: none;
    border-bottom: 1px solid #ced4da;
    border-radius: 0;
  }
`;

export const Text = styled.p`
  font-size: ${props => props.fontSize || ""};
  color: ${props => props.fontSize || "grey"};
  padding-bottom: ${props => props.paddingbottom || "0"};
`;
