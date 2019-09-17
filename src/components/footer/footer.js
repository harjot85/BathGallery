import React, { Component } from "react";
import { FooterContainer, FooterStyles, FooterSection } from "./styled";

import { Row, Col } from "reactstrap";
import { ColStyled, Text } from "../sharedStyledComponents/index";

import { H3 } from "../sharedStyledComponents/index";
import { Link } from "react-router-dom";

class Footer extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.4.2/css/all.css"
          integrity="sha384-/rXc/GQVaYpyDdyxK+ecHPVYJSN9bmVFBvjA/9eOB+pb3F2w2N6fc5qB9Ew5yIns"
          crossOrigin="anonymous"
        />
        <FooterContainer>
          <div
            style={{ position: "absolute", textAlign: "center", width: "100%" }}
          >
            <Row
              style={{
                color: "#fff",
                paddingTop: "5%",
                paddingBottom: "2%",
                width: "100%"
              }}
            >
              <FooterSection lg="4" md="4" xs="12" textalign="left">
                <Row>
                  <Col>
                    <H3 style={{ textAlign: "left" }} inputColor="#A7C9DF">
                      Hours
                    </H3>
                  </Col>
                </Row>
                <Row>
                  <Col>Monday - Friday: 9:00 To 5:30</Col>
                </Row>
                <Row>
                  <Col>Saturday: 10:00 To 3:30</Col>
                </Row>
                <Row>
                  <Col>Sunday Closed</Col>
                </Row>
              </FooterSection>
              <FooterSection lg="4" md="4" xs="12" textalign="left">
                <H3 style={{ textAlign: "left" }} inputColor="#A7C9DF">
                  Contact
                </H3>
                <Row>
                  <Col>#155-2771 Progressive Way, Abbotsford V2T0A7, BC</Col>
                </Row>
                <Row>
                  <Col>Phone: (604) 746-1487</Col>
                </Row>
                <Row>
                  <Col>Email: info@bathgallery.ca</Col>
                </Row>
              </FooterSection>
              <FooterSection lg="4" md="4" xs="12">
                <Row>
                  <Col>
                    <H3 inputColor="#A7C9DF" />
                  </Col>
                </Row>
                <Row>
                  <FooterStyles>
                    <Col>
                      <div className="social-div fb">
                        <a href="/">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </div>
                      <div className="social-div in">
                        <a href="/">
                          <i className="fab fa-instagram social-i" />
                        </a>
                      </div>
                      <Link to="/contact" style={{ color: "white" }}>
                        <div className="social-div em">
                          <i className="fas fa-envelope social-i" />
                        </div>
                      </Link>
                    </Col>
                  </FooterStyles>
                </Row>
              </FooterSection>
              <ColStyled margintop="4rem" lg={12} md={12} sm={12}>
                <Text>
                © copyright Kaliber Products Ltd. DBA Bath Gallery 2018
                </Text>
              </ColStyled>
            </Row>
          </div>
        </FooterContainer>
      </React.Fragment>
    );
  }
}

export default Footer;
