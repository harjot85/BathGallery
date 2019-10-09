import React from "react";
import {
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import logo from '../../images/logobg.jpg' 
import { getInformationBar } from "../../utilities/functions";
import { NavbarStyled } from "./styled";


export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        {getInformationBar()}
        <NavbarStyled color="light" light expand="md">
          <NavbarBrand href="/">
          <img
              style={{ maxWidth: "125px", maxHeight: "80px" }}
              src={logo}
              alt="Bath Gallery"
            />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Products
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Bathroom</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Kitchen</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Accessories</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <NavItem>
                <NavLink href="/contact/">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </NavbarStyled>
      </div>
    );
  }
}
