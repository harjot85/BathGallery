import React, { Component } from "react";
import {
  RowStyled,
  ColStyled,
  ProductCardContainer,
  ProductCard,
  CardLink
} from "../sharedStyledComponents/index";

import { Carousel, SliderButton } from "./styled";

import { getElementsPerScreen } from "../../utilities/functions";

export default class ProductSectionWithCarousel extends Component {
  state = {
    cards: 3
  };

  componentWillMount() {
    this.setState({
      activeItemIndex: 0
    });
  }

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate = () => {
    let cards = getElementsPerScreen();
    this.setState({ cards });
  };

  changeActiveItem = activeItemIndex => this.setState({ activeItemIndex });

  render() {
    const { activeItemIndex } = this.state;
    const { product } = this.props;

    return (
      <ProductCardContainer height="auto">
        <ColStyled lg={12} md={12} sm={12} padding="0 50px" margintop="1rem">
          <Carousel
            numberOfCards={this.state.cards}
            gutter={12}
            showSlither={false}
            firstAndLastGutter={false}
            freeScrolling={false}
            requestToChangeActive={this.changeActiveItem}
            activeItemIndex={activeItemIndex}
            activePosition={"center"}
            chevronWidth={99}
            rightChevron={
              <SliderButton outline color="dark" size="lg">
                {">"}
              </SliderButton>
            }
            leftChevron={
              <SliderButton outline color="dark" size="lg">
                {"<"}
              </SliderButton>
            }
            outsideChevron={true}
          >
            {Object.keys(product).map(i => (
              <ColStyled lg={4} md={4} sm={12} padding="10px 0">
                <CardLink href="www.google.com">
                  <ProductCard>
                    <RowStyled marginleft="0" marginright="0" margintop="0">
                      <ColStyled margintop="0">
                        <img
                          id="bathTubImgimage"
                          src={product[i].path}
                          alt="Bath"
                          border="0"
                          style={{ width: "388px", height: "250px" }}
                        />
                      </ColStyled>
                      <ColStyled lg={12} md={12} sm={12} marginbottom="1em">
                        Description of the product
                      </ColStyled>
                    </RowStyled>
                  </ProductCard>
                </CardLink>
              </ColStyled>
            ))}
          </Carousel>
        </ColStyled>
      </ProductCardContainer>
    );
  }
}
