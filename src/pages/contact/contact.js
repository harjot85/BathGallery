import React, { Component } from "react";
import { Input, FormGroup, Alert } from "reactstrap";

import {
  RowStyled,
  ColStyled,
  InputStyled,
  LabelStyled,
  ButtonStyled,
  Section
} from "../../components/sharedStyledComponents/index";

import Footer from "../../components/footer/footer";

class Contact extends Component {
  state = {
    fullName: "",
    emailAddress: "",
    phone: "",
    message: ""
  };

  handleClear = () => {
    //clear state
    this.setState({});
  };

  render() {
    return (
      <div>
        <Section margintop="2rem">
          <RowStyled>
            <ColStyled lg={12} md={12} sm={12}>
              <div style={{ textAlign: "center" }}>
                <h1>How may we help?</h1>
                <hr />
              </div>
            </ColStyled>
          </RowStyled>
        </Section>

        <Section margintop="2rem">
          <RowStyled marginleft="6rem" marginright="6rem">
            <ColStyled lg={4} md={4} sm={12}>
              <LabelStyled>Your Name</LabelStyled>
            </ColStyled>
            <ColStyled lg={6} md={6} sm={12}>
              <InputStyled name="fullName" />
            </ColStyled>

            <ColStyled lg={4} md={4} sm={12}>
              <LabelStyled>Your Email</LabelStyled>
            </ColStyled>
            <ColStyled lg={6} md={6} sm={12}>
              <InputStyled name="emailAddress" />
            </ColStyled>

            <ColStyled lg={4} md={4} sm={12}>
              <LabelStyled>Your Phone</LabelStyled>
            </ColStyled>
            <ColStyled lg={6} md={6} sm={12}>
              <InputStyled name="phone" />
            </ColStyled>

            <ColStyled lg={4} md={4} sm={12} margintop="4rem">
              <LabelStyled>Your Message</LabelStyled>
            </ColStyled>
            <ColStyled lg={6} md={6} sm={12} margintop="4rem">
              <Input
                className="textarea-box"
                name="message"
                rows="8"
                type="textarea"
                //onChange={this.handleChange}
              />
            </ColStyled>
          </RowStyled>

          <RowStyled>
            <ColStyled lg={4} md={4} sm={12} />
            <ColStyled lg={8} md={8} sm={12}>
              <div
                style={{
                  display: "inline-flex",
                  textAlign: "left",
                  width: "100%",
                  marginLeft: "1rem"
                }}
              >
                <ButtonStyled
                  color="info"
                  size="lg"
                  block
                  // onClick={this.handleSubmit}
                >
                  Submit
                </ButtonStyled>

                <ButtonStyled
                  outline
                  color="secondary"
                  size="lg"
                  block
                  onClick={this.handleClear}
                >
                  Clear
                </ButtonStyled>
              </div>
            </ColStyled>
          </RowStyled>
        </Section>

        <Footer />
      </div>
    );
  }
}

export default Contact;
