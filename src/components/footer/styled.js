import styled from "styled-components";
import { Col } from "reactstrap";

export const FooterContainer = styled.div`
  width: 100%;
  min-height: 350px;
  background-color: black;
  margin-top: 5em;
  left: 0;
  bottom: 0;
  text-align: center;
`;

export const FooterSection = styled(Col)`
  &&& {
    padding-left: ${props => props.paddingleft || "6rem"};
  }
  text-align: ${props => props.textalign || "center"};
  padding-top: 1rem;
`;

export const FooterStyles = styled.div`
  .social-div {
    width: 75px;
    height: 75px;
    margin: 0.2em;
    font-size: 28px;
    background-color: #4f4f4f;
    border-radius: 50%;
    display: inline-block;
    line-height: 70px;
  }

  .social-div a {
    color: #fff;
  }

  .fb:hover {
    background-color: #336699;
    box-shadow: 0 0 10px 2px #336699;
  }

  .in:hover {
    background-color: #ec6a41;
    box-shadow: 0 0 10px 2px #ec6a41;
  }
  .em:hover {
    background-color: orange;
    box-shadow: 0 0 10px 2px orange;
  }
  .social-i {
    vertical-align: middle;
    text-align: center;
  }
`;
