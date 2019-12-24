import styled from "styled-components";
import ItemsCarousel from "react-items-carousel";
import { Button } from "reactstrap";

export const SliderButton = styled(Button)`
  &&& {
    border-radius: 50%;
    box-shadow: 0 0 4px 1px #c8d8d8;
    

    @media (max-width: 515px) {
      padding: 2px 10px;
    }
  }
`;

export const Carousel = styled(ItemsCarousel)`
  button {
    background-color: white;
  }
`;
