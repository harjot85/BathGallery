import React, { Component } from "react";
import { InformationBar } from "../../components/sharedStyledComponents/index";
import Navigation from "../../components/navigationBar/navigationBar";

class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <InformationBar>Let me guide you ...</InformationBar>
        <Navigation/>
      </>
    );
  }
}

export default Home;
