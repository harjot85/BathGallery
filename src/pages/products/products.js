import React, { Component } from "react";
import {
  RowStyled,
  ColStyled,
  ProductCardContainer,
  ProductCard,
  Section
} from "../../components/sharedStyledComponents/index";

import ProductSectionWithCarousel from "../../components/productSectionWithCarousel/productSectionWithCarousel";
import ProductCategory from "../../components/productCategory/productCategory";
import Footer from "../../components/footer/footer";

//Data
import dataFile from "../../Assets/data.json";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const data = dataFile;
    this.setState({ data });
  }

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

    const bathTubsData =
      this.state.data.length > 0 ? bathroomData.bathroom[2].bathTub : null;

    const kitchenFaucetData =
      this.state.data.length > 0 ? kitchenData.kitchen[0].faucet : null;
    const kitchenSinkData =
      this.state.data.length > 0 ? kitchenData.kitchen[0].sink : null;

    const imgs_bathtub = this.importAll(
      require.context(
        "../../Assets/images/products/bathroom/bathtub",
        false,
        /\.(png|jpe?g)$/
      )
    );

    const kitchenFaucetImages = this.importAll(
      require.context(
        "../../Assets/images/products/kitchen/Faucet",
        false,
        /\.(png|jpe?g)$/
      )
    );

    const kitchenFaucetmageCollection = Object.keys(kitchenFaucetImages).map(
      key => ({
        imageFileName: key,
        path: kitchenFaucetImages[key]
      })
    );

    const bathTubmageCollection = Object.keys(imgs_bathtub).map(
      key => ({
        imageFileName: key,
        path: imgs_bathtub[key]
      })
    );

    let bathTubs = [];
    let kitchenFaucets = [];
    if (kitchenFaucetData && bathTubsData) {
      let mergeImagePathToImageData = (
        kitchenFaucetData,
        kitchenFaucetmageCollection
      ) =>
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

      bathTubs = mergeImagePathToImageData(
        bathTubsData, 
        bathTubmageCollection
      )
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

            {/* ------------------- Bath Tubs ------------------- */}
            <ProductCategory category={"Bath Tubs"} />
            <ProductSectionWithCarousel product={bathTubs} />

            {/* ------------------- Faucets ------------------- */}

            <ProductCategory category={"Faucets"} />
            <ProductSectionWithCarousel product={kitchenFaucets} />

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
