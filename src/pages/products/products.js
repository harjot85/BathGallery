import React, { Component } from "react";
import {
  RowStyled,
  ColStyled,
  ProductCardContainer,
  ProductCard,
  Section
} from "../../components/sharedStyledComponents/index";

//Custom Components
import { Carousel, SliderButton } from "./styled";

import { getElementsPerScreen } from "../../utilities/functions";

import bathTub_1 from "../../images/bathtub_sm_1.jpg";
import bathTub_2 from "../../images/bathtub_sm_2.jpg";
import bathTub_3 from "../../images/bathtub_sm_3.jpg";
import bathTub_4 from "../../images/bathtub_sm_4.jpg";
import bathTub_5 from "../../images/bathtub_sm_5.jpg";

import Footer from "../../components/footer/footer";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: 3
    };
  }

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
    var showCards;
    showCards = getElementsPerScreen();
    this.setState({ cards: showCards });
  };

  changeActiveItem = activeItemIndex => this.setState({ activeItemIndex });

  render() {
    const { activeItemIndex } = this.state;
    return (
      <>
        <Section margintop="2rem">
          <RowStyled>
            <ColStyled lg={12} md={12} sm={12}>
              <div style={{ textAlign: "left" }}>
                <h1>Bathroom</h1>
                <hr />
              </div>
            </ColStyled>

            <ColStyled lg={12} md={12} sm={12}>
              <div style={{ textAlign: "left" }}>
                <h3>Bath Tubs</h3>
              </div>
            </ColStyled>
            <ProductCardContainer height="auto">
            <ColStyled lg={12} md={12} sm={12} padding="0 50px" margintop="1rem">
            
              {/* <RowStyled marginleft="0"> */}

              {/* <RowStyled marginBottom="2em">  */}

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
                <ColStyled lg={4} md={4} sm={12} padding="10px 0">
                  <ProductCard>
                    <RowStyled marginleft="0" marginright="0" margintop="0">
                      <ColStyled margintop="0">
                        <img
                          id="bathTubImgimage"
                          src={bathTub_1}
                          alt="Bath"
                          border="0"
                          style={{ width: "388px", height: "250px" }}
                        />
                      </ColStyled>
                      <ColStyled lg={12} md={12} sm={12}>
                        Description of the product
                      </ColStyled>
                    </RowStyled>
                  </ProductCard>
                </ColStyled>

                <ColStyled lg={4} md={4} sm={12} padding="10px 0">
                  <ProductCard>
                    <RowStyled marginleft="0" marginright="0" margintop="0">
                      <ColStyled margintop="0">
                        <img
                          id="bathTubImgimage"
                          src={bathTub_2}
                          alt="Bath"
                          border="0"
                          style={{ width: "388px", height: "250px" }}
                        />
                      </ColStyled>
                      <ColStyled lg={12} md={12} sm={12}>
                        Description of the product
                      </ColStyled>
                    </RowStyled>
                  </ProductCard>
                </ColStyled>

                <ColStyled lg={4} md={4} sm={12} padding="10px 0">
                  <ProductCard>
                    <RowStyled marginleft="0" marginright="0" margintop="0">
                      <ColStyled margintop="0">
                        <img
                          id="bathTubImgimage"
                          src={bathTub_3}
                          alt="Bath"
                          border="0"
                          style={{ width: "388px", height: "250px" }}
                        />
                      </ColStyled>
                      <ColStyled lg={12} md={12} sm={12}>
                        Description of the product
                      </ColStyled>
                    </RowStyled>
                  </ProductCard>
                </ColStyled>

                <ColStyled lg={4} md={4} sm={12} padding="10px 0">
                  <ProductCard>
                    <RowStyled marginleft="0" marginright="0" margintop="0">
                      <ColStyled margintop="0">
                        <img
                          id="bathTubImgimage"
                          src={bathTub_4}
                          alt="Bath"
                          border="0"
                          style={{ width: "388px", height: "250px" }}
                        />
                      </ColStyled>
                      <ColStyled lg={12} md={12} sm={12}>
                        Description of the product
                      </ColStyled>
                    </RowStyled>
                  </ProductCard>
                </ColStyled>

                <ColStyled lg={4} md={4} sm={12} padding="10px 0">
                  <ProductCard>
                    <RowStyled marginleft="0" marginright="0" margintop="0">
                      <ColStyled margintop="0">
                        <img
                          id="bathTubImgimage"
                          src={bathTub_5}
                          alt="Bath"
                          border="0"
                          style={{ width: "388px", height: "250px" }}
                        />
                      </ColStyled>
                      <ColStyled lg={12} md={12} sm={12}>
                        Description of the product
                      </ColStyled>
                    </RowStyled>
                  </ProductCard>
                </ColStyled>

                <ColStyled lg={4} md={4} sm={12} padding="10px 0">
                  <ProductCard>
                    <RowStyled marginleft="0" marginright="0" margintop="0">
                      <ColStyled margintop="0">
                        <img
                          id="bathTubImgimage"
                          src={bathTub_1}
                          alt="Bath"
                          border="0"
                          style={{ width: "388px", height: "250px" }}
                        />
                      </ColStyled>
                      <ColStyled lg={12} md={12} sm={12}>
                        Description of the product
                      </ColStyled>
                    </RowStyled>
                  </ProductCard>
                </ColStyled>
              </Carousel>
              {/* </RowStyled> */}

              {/* </RowStyled> */}
            </ColStyled>
            </ProductCardContainer>

            <ColStyled lg={12} md={12} sm={12}>
              <RowStyled marginleft="0">
                <h5>Kitchen</h5>
              </RowStyled>
              <RowStyled marginleft="0">
                <ProductCardContainer height="auto">
                  <RowStyled marginBottom="2em">
                    <ColStyled lg={4} md={4} sm={12}>
                      <ProductCard />
                    </ColStyled>

                    <ColStyled lg={4} md={4} sm={12}>
                      <ProductCard />
                    </ColStyled>

                    <ColStyled lg={4} md={4} sm={12}>
                      <ProductCard />
                    </ColStyled>

                    <ColStyled lg={4} md={4} sm={12}>
                      <ProductCard />
                    </ColStyled>

                    <ColStyled lg={4} md={4} sm={12}>
                      <ProductCard />
                    </ColStyled>

                    <ColStyled lg={4} md={4} sm={12}>
                      <ProductCard />
                    </ColStyled>
                  </RowStyled>
                </ProductCardContainer>
              </RowStyled>
            </ColStyled>

            <ColStyled lg={12} md={12} sm={12}>
              <RowStyled marginleft="0">
                <h5>Accessories</h5>
              </RowStyled>

              <ProductCardContainer></ProductCardContainer>
            </ColStyled>
          </RowStyled>
        </Section>

        <Footer />
      </>
    );
  }
}

export default Products;
