import React, { Component } from "react";
import {
  RowStyled,
  ColStyled,
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
    console.log(this.state.data);
    const bathroomData = this.state.data[0];
    const kitchenData = this.state.data[1];
    const accessoriesData = this.state.data[2];

    const bathroomData_basin =
      this.state.data.length > 0 ? bathroomData.bathroom[0].basin : null;
    const bathroomData_bathTub =
      this.state.data.length > 0 ? bathroomData.bathroom[1].bathTub : null;
    const bathroomData_faucet =
      this.state.data.length > 0 ? bathroomData.bathroom[2].faucet : null;
    const bathroomData_furniture =
      this.state.data.length > 0
        ? bathroomData.bathroom[3].bathFurniture
        : null;
    const bathroomData_shower =
      this.state.data.length > 0 ? bathroomData.bathroom[4].shower : null;
    const bathroomData_showerBase =
      this.state.data.length > 0 ? bathroomData.bathroom[5].showerBase : null;
    const bathroomData_showerDoor =
      this.state.data.length > 0 ? bathroomData.bathroom[6].showerDoor : null;
    const bathroomData_toilet =
      this.state.data.length > 0 ? bathroomData.bathroom[7].toilet : null;

    const kitchenData_faucet =
      this.state.data.length > 0 ? kitchenData.kitchen[0].faucet : null;
    const kitchenData_sink =
      this.state.data.length > 0 ? kitchenData.kitchen[1].sink : null;

    const accessoriesData_all =
      this.state.data.length > 0 ? accessoriesData.accessories[0].all : null;

    const imgs_basin = this.importAll(
      require.context(
        "../../Assets/images/products/bathroom/basin",
        false,
        /\.(png|jpe?g)$/
      )
    );

    const imgs_bathtub = this.importAll(
      require.context(
        "../../Assets/images/products/bathroom/bathtub",
        false,
        /\.(png|jpe?g)$/
      )
    );

    const imgs_bathroom_faucet = this.importAll(
      require.context(
        "../../Assets/images/products/bathroom/faucet",
        false,
        /\.(png|jpe?g)$/
      )
    );

    const imgs_furniture = this.importAll(
      require.context(
        "../../Assets/images/products/bathroom/furniture",
        false,
        /\.(png|jpe?g)$/
      )
    );

    const imgs_shower = this.importAll(
      require.context(
        "../../Assets/images/products/bathroom/shower",
        false,
        /\.(png|jpe?g)$/
      )
    );

    const imgs_showerBase = this.importAll(
      require.context(
        "../../Assets/images/products/bathroom/showerBase",
        false,
        /\.(png|jpe?g)$/
      )
    );

    const imgs_showerDoor = this.importAll(
      require.context(
        "../../Assets/images/products/bathroom/showerDoor",
        false,
        /\.(png|jpe?g)$/
      )
    );

    const imgs_toilet = this.importAll(
      require.context(
        "../../Assets/images/products/bathroom/toilet",
        false,
        /\.(png|jpe?g)$/
      )
    );

    const imgs_kitchen_faucet = this.importAll(
      require.context(
        "../../Assets/images/products/kitchen/faucet",
        false,
        /\.(png|jpe?g)$/
      )
    );

    const imgs_kitchen_sink = this.importAll(
      require.context(
        "../../Assets/images/products/kitchen/sink",
        false,
        /\.(png|jpe?g)$/
      )
    );

    const imgs_accessories = this.importAll(
      require.context(
        "../../Assets/images/products/accessories",
        false,
        /\.(png|jpe?g)$/
      )
    );

    const basinImages = Object.keys(imgs_basin).map(key => ({
      imageFileName: key,
      path: imgs_basin[key]
    }));
    const bathTubImages = Object.keys(imgs_bathtub).map(key => ({
      imageFileName: key,
      path: imgs_bathtub[key]
    }));
    const bathroomFaucetImages = Object.keys(imgs_bathroom_faucet).map(key => ({
      imageFileName: key,
      path: imgs_bathroom_faucet[key]
    }));
    const furnitureImages = Object.keys(imgs_furniture).map(key => ({
      imageFileName: key,
      path: imgs_furniture[key]
    }));
    const showerImages = Object.keys(imgs_shower).map(key => ({
      imageFileName: key,
      path: imgs_shower[key]
    }));
    const showerBaseImages = Object.keys(imgs_showerBase).map(key => ({
      imageFileName: key,
      path: imgs_showerBase[key]
    }));
    const showerDoorImages = Object.keys(imgs_showerDoor).map(key => ({
      imageFileName: key,
      path: imgs_showerDoor[key]
    }));
    const toiletImages = Object.keys(imgs_toilet).map(key => ({
      imageFileName: key,
      path: imgs_toilet[key]
    }));

    const kitchenFaucetImages = Object.keys(imgs_kitchen_faucet).map(key => ({
      imageFileName: key,
      path: imgs_kitchen_faucet[key]
    }));

    const kitchenSinkImages = Object.keys(imgs_kitchen_sink).map(key => ({
      imageFileName: key,
      path: imgs_kitchen_sink[key]
    }));

    const accessoriesImages = Object.keys(imgs_accessories).map(key => ({
      imageFileName: key,
      path: imgs_accessories[key]
    }));

    let basins = [];
    let bathTubs = [];
    let faucets = [];
    let furniture = [];
    let showers = [];
    let showerBases = [];
    let showerDoors = [];
    let toilets = [];

    let kitchenFaucets = [];
    let kitchenSinks = [];

    let accessories = [];

    if (bathroomData_basin && bathroomData_bathTub && kitchenData_faucet) {
      let mergeImagePathToImageData = (
        kitchenData_faucet,
        kitchenFaucetImages
      ) =>
        kitchenFaucetImages.map(itm => ({
          ...kitchenData_faucet.find(
            item => item.imageFileName === itm.imageFileName && item
          ),
          ...itm
        }));

      basins = mergeImagePathToImageData(bathroomData_basin, basinImages);
      bathTubs = mergeImagePathToImageData(bathroomData_bathTub, bathTubImages);
      faucets = mergeImagePathToImageData(
        bathroomData_faucet,
        bathroomFaucetImages
      );
      furniture = mergeImagePathToImageData(
        bathroomData_furniture,
        furnitureImages
      );
      showers = mergeImagePathToImageData(bathroomData_shower, showerImages);
      showerBases = mergeImagePathToImageData(
        bathroomData_showerBase,
        showerBaseImages
      );
      showerDoors = mergeImagePathToImageData(
        bathroomData_showerDoor,
        showerDoorImages
      );
      toilets = mergeImagePathToImageData(bathroomData_toilet, toiletImages);

      kitchenFaucets = mergeImagePathToImageData(
        kitchenData_faucet,
        kitchenFaucetImages
      );

      kitchenSinks = mergeImagePathToImageData(
        kitchenData_sink,
        kitchenSinkImages
      );

      accessories = mergeImagePathToImageData(
        accessoriesData_all,
        accessoriesImages
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

            <ProductCategory category={"Basins"} />
            <ProductSectionWithCarousel product={basins} />

            <ProductCategory category={"Bath Tubs"} />
            <ProductSectionWithCarousel product={bathTubs} />

            <ProductCategory category={"Faucets"} />
            <ProductSectionWithCarousel product={faucets} />

            <ProductCategory category={"Furniture"} />
            <ProductSectionWithCarousel product={furniture} />

            <ProductCategory category={"Shower"} />
            <ProductSectionWithCarousel product={showers} />

            <ProductCategory category={"Shower Base"} />
            <ProductSectionWithCarousel product={showerBases} />

            <ProductCategory category={"Shower Door"} />
            <ProductSectionWithCarousel product={showerDoors} />

            <ProductCategory category={"Toilets"} />
            <ProductSectionWithCarousel product={toilets} />

            {/* ------------------- Kitchen ------------------- */}

            <ColStyled lg={12} md={12} sm={12}>
              <div style={{ textAlign: "left" }}>
                <h1>Kitchen</h1>
                <hr />
              </div>
            </ColStyled>

            <ProductCategory category={"Faucets"} />
            <ProductSectionWithCarousel product={kitchenFaucets} />

            <ProductCategory category={"Sinks"} />
            <ProductSectionWithCarousel product={kitchenSinks} />

            {/* ------------------- Kitchen ------------------- */}

            <ColStyled lg={12} md={12} sm={12}>
              <div style={{ textAlign: "left" }}>
                <h1>Accessories</h1>
                <hr />
              </div>
            </ColStyled>

            <ProductCategory category={"All"} />
            <ProductSectionWithCarousel product={accessories} />
          </RowStyled>
        </Section>

        <Footer />
      </>
    );
  }
}

export default Products;
