import React, { Component } from "react";

import {
  RowStyled,
  ColStyled,
  ProductCardContainer,
  Section
} from "../../components/sharedStyledComponents/index";

import bathTubImage from "../../images/bathtub1.jpg";
// import splashImage from "../../images/splash.jpg";
import luxuryBathroom from "../../images/minimalist-bathroom.jpg";
import luxuryKitchen from "../../images/minKitchen.jpg";
import accessoriesImage from "../../images/MattBlack.jpg";

import styled from "styled-components";

import Footer from "../../components/footer/footer";

const ImageContainer = styled.div`
  &&& {
    height: 100%;
    width: 100%;
  }
`;

const Brand = styled.div`
  height: 100px;
  width: 225px;
  background-color: grey;
`;

class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <ImageContainer>
          <img
            id="bathTubImgimage"
            src={bathTubImage}
            alt="Bath"
            border="0"
            style={{ maxWidth: "100%" }}
          />
        </ImageContainer>

        <Section>
          <RowStyled>
            <ColStyled lg={12} md={12} sm={12}>
              <div style={{ textAlign: "left" }}>
                <h1>Products</h1>
                <hr />
              </div>
            </ColStyled>

            <ColStyled lg={6} md={6} sm={12}>
              <RowStyled marginleft="0">
                <h5>Bathroom</h5>
              </RowStyled>
              <ProductCardContainer>
                <img
                  id="bathTubImgimage"
                  src={luxuryBathroom}
                  alt="Bath"
                  border="0"
                  style={{ minWidth: "100%", maxHeight: "100%" }}
                />
              </ProductCardContainer>
            </ColStyled>

            <ColStyled lg={6} md={6} sm={12}>
              <RowStyled marginleft="0">
                <h5>Kitchen</h5>
              </RowStyled>
              <ProductCardContainer>
                <img
                  id="bathTubImgimage"
                  src={luxuryKitchen}
                  alt="Bath"
                  border="0"
                  style={{ minWidth: "100%", maxHeight: "100%" }}
                />
              </ProductCardContainer>
            </ColStyled>

            <ColStyled lg={6} md={6} sm={12}>
              <RowStyled marginleft="0">
                <h5>Accessories</h5>
              </RowStyled>
              <ProductCardContainer>
                <img
                  id="bathTubImgimage"
                  src={accessoriesImage}
                  alt="Bath"
                  border="0"
                  style={{ minWidth: "100%", maxHeight: "100%" }}
                />
              </ProductCardContainer>
            </ColStyled>
          </RowStyled>
        </Section>

        {/* --------Instagram-------- */}
        <Section>
          <RowStyled>
            <ColStyled lg={12} md={12} sm={12}>
              <div style={{ textAlign: "left" }}>
                <h1>Latest</h1>
                <hr />
              </div>
            </ColStyled>

            <ColStyled padding="0 5%" lg={4} md={6} sm={12}>
              <ProductCardContainer>News Feed</ProductCardContainer>
            </ColStyled>
            <ColStyled padding="0 5%" lg={4} md={6} sm={12}>
              <ProductCardContainer>News Feed</ProductCardContainer>
            </ColStyled>
            <ColStyled padding="0 5%" lg={4} md={6} sm={12}>
              <ProductCardContainer>News Feed</ProductCardContainer>
            </ColStyled>
          </RowStyled>
        </Section>

        {/* --------Brands-------- */}
        <Section>
          <RowStyled>
            <ColStyled lg={12} md={12} sm={12}>
              <div style={{ textAlign: "left" }}>
                <h1>Brands we Carry</h1>
                <hr />
              </div>
            </ColStyled>
            <ColStyled lg={2} md={2} sm={6}>
              <Brand>Brand </Brand>
            </ColStyled>
            <ColStyled lg={2} md={2} sm={6}>
              <Brand>Brand </Brand>
            </ColStyled>
            <ColStyled lg={2} md={2} sm={6}>
              <Brand>Brand </Brand>
            </ColStyled>
            <ColStyled lg={2} md={2} sm={6}>
              <Brand>Brand </Brand>
            </ColStyled>
            <ColStyled lg={2} md={2} sm={6}>
              <Brand>Brand </Brand>
            </ColStyled>
            <ColStyled lg={2} md={2} sm={6}>
              <Brand>Brand </Brand>
            </ColStyled>
            <ColStyled lg={2} md={2} sm={6}>
              <Brand>Brand </Brand>
            </ColStyled>
            <ColStyled lg={2} md={2} sm={6}>
              <Brand>Brand </Brand>
            </ColStyled>
          </RowStyled>
        </Section>

        <Footer />
      </>
    );
  }
}

export default Home;
