import styled from "styled-components";
import { Row, Col } from "reactstrap";

export const InformationBar = styled.div`
  width: 100%;
  height: 3rem;
  background-color: black;
  color: white;
  vertical-align: middle;
  line-height: 3rem;
  text-align: center;
`;

export const ProductCard = styled.div`
  height: ${props => props.height || "25rem"};
  width: ${props => props.width || "100%"};
  border: 1px solid grey;
  border-radius: 0.1rem;
  margin: 0 auto;
  background-color: white;
`;

export const RowStyled = styled(Row)`
  margin-top: ${props => props.margintop || "1rem"};
  &&& {
    margin-right: ${props => props.marginright || "4rem"};
    margin-left: ${props => props.marginleft || "4rem"};
  }
`;

export const ColStyled = styled(Col)`
  margin: ${props => props.margin || "0"};
  padding: ${props => props.padding || "0"};
  margin-top: ${props => props.margintop || "2rem"};
`;

export const Section = styled.div`
  margin-top: ${props => props.margintop || "5rem"};
  background-image: ${props => `url(${props.bgImage})` || ""};
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
