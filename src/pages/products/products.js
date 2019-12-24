import React, { Component } from "react";
import {
  RowStyled,
  ColStyled,
  ProductCardContainer,
  ProductCard,
  CardLink,
  Section
} from "../../components/sharedStyledComponents/index";

//Custom Components
import { Carousel, SliderButton } from "./styled";

import { getElementsPerScreen } from "../../utilities/functions";

import Footer from "../../components/footer/footer";

//Data
import dataFile from "../../Assets/data.json";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: 3,
      data: []
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
    const data = dataFile;
    this.setState({ data });
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

  importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  render() {
    const bathroomData = this.state.data[0];
    const kitchenData = this.state.data[1];

    const kitchenFaucetData =
      this.state.data.length > 0 ? kitchenData.kitchen[0].faucet : null;
    const kitchenSinkData = 
      this.state.data.length > 0 ? kitchenData.kitchen[0].sink : null;

    const { activeItemIndex } = this.state;

    // const imgs_bathtub = this.importAll(
    //   require.context(
    //     "../../images/products/bathroom/bathtub",
    //     false,
    //     /\.(png|jpe?g)$/
    //   )
    // );

    const kitchenFaucetImages = this.importAll(
      require.context(
        "../../Assets/images/products/kitchen/Faucet",
        false,
        /\.(png|jpe?g)$/
      )
    );

    const kitchenFaucetmageCollection = Object.keys(kitchenFaucetImages).map(key => ({
      imageFileName: key,
      path: kitchenFaucetImages[key]
    }));

    let kitchenFaucets = [];
    if (kitchenFaucetData) {
      let mergeImagePathToImageData = (kitchenFaucetData, kitchenFaucetmageCollection) =>
        kitchenFaucetmageCollection.map(itm => ({
          ...kitchenFaucetData.find(
            item => item.imageFileName === itm.imageFileName && item
          ),
          ...itm
        }));

      kitchenFaucets = mergeImagePathToImageData(
        kitchenFaucetData,
        kitchenFaucetmageCollection
      );
    }

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
              <ColStyled
                lg={12}
                md={12}
                sm={12}
                padding="0 50px"
                margintop="1rem"
              >
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
                   {Object.keys(kitchenFaucets).map(i => (
                    <ColStyled lg={4} md={4} sm={12} padding="10px 0">
                      <CardLink href="www.google.com">
                        <ProductCard>
                          <RowStyled
                            marginleft="0"
                            marginright="0"
                            margintop="0"
                          >
                            <ColStyled margintop="0">
                              <img
                                id="bathTubImgimage"
                                src={kitchenFaucets[i].path}
                                alt="Bath"
                                border="0"
                                style={{ width: "388px", height: "250px" }}
                              />
                            </ColStyled>
                            <ColStyled
                              lg={12}
                              md={12}
                              sm={12}
                              marginbottom="1em"
                            >
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

            {/* ------------------- Faucets ------------------- */}

            <ColStyled lg={12} md={12} sm={12}>
              <div style={{ textAlign: "left" }}>
                <h3>Faucets</h3>
              </div>
            </ColStyled>
            <ProductCardContainer height="auto">
              <ColStyled
                lg={12}
                md={12}
                sm={12}
                padding="0 50px"
                margintop="1rem"
              >
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
                  {/* {Object.keys(kitchenFaucetImages).map(i => 
                    <ColStyled lg={4} md={4} sm={12} padding="10px 0">
                      <ProductCard>
                        <RowStyled marginleft="0" marginright="0" margintop="0">
                          <ColStyled margintop="0">
                            <img
                              id="bathTubImgimage"
                              src={kitchenFaucetImages[i]}
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
                    </ColStyled> */}
                  )}
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
                  <RowStyled marginbottom="2em">
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
