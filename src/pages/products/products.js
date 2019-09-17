import React, { Component } from "react";
import {
  RowStyled,
  ColStyled,
  ProductCard,
  Section
} from "../../components/sharedStyledComponents/index";

import Footer from "../../components/footer/footer";


class Products extends Component {
  state = {};
  render() {
    return (
      <>
        <Section margintop="2rem">
          <RowStyled>
            <ColStyled lg={12} md={12} sm={12}>
              <div style={{ textAlign: "left" }}>
                <h1>Products</h1>
                <hr />
              </div>
            </ColStyled>

            <ColStyled lg={12} md={12} sm={12}>
              <RowStyled marginleft="0">
                <h5>Bathroom</h5>
              </RowStyled>

              <ProductCard></ProductCard>
            </ColStyled>

            <ColStyled lg={12} md={12} sm={12}>
              <RowStyled marginleft="0">
                <h5>Kitchen</h5>
              </RowStyled>

              <ProductCard></ProductCard>
            </ColStyled>

            <ColStyled lg={12} md={12} sm={12}>
              <RowStyled marginleft="0">
                <h5>Accessories</h5>
              </RowStyled>

              <ProductCard></ProductCard>
            </ColStyled>

          </RowStyled>
        </Section>

        <Footer />
      </>
    );
  }
}

export default Products;
