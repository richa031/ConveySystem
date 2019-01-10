import React from "react";
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, FormInline, Dropdown, DropdownToggle, DropdownMenu,  DropdownItem } from "mdbreact";

class NavbarPage extends React.Component {
  state = {
    isOpen: false
  };

  toggleCollapse = this.setState({ isOpen: !this.state.isOpen });

  render() {
    return (

      <Navbar color="default-color" dark expand="md">
          <NavbarBrand>
            <strong className="white-text">Navbar</strong>
          </NavbarBrand>
          <NavbarToggler
            onClick={this.toggleCollapse}
          />
          <Collapse
            id="navbarCollapse3"
            isOpen={this.state.isOpen}
            navbar
          >
            <NavbarNav left>
              <NavItem active>
                <NavLink to="#!">Home</NavLink>
              </NavItem>
              <NavItem>
                <Dropdown>
                  <DropdownToggle nav caret>
                    <div className="d-none d-md-inline">Categories</div>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem href="#!">Action</DropdownItem>
                    <DropdownItem href="#!">Another Action</DropdownItem>
                    <DropdownItem href="#!">Something else here</DropdownItem>
                    <DropdownItem href="#!">Something else here</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
              <NavItem>
                <NavLink to="#!">About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#!">Contact Us</NavLink>
              </NavItem>
            </NavbarNav>
            <NavbarNav right>
              <NavItem>
                <FormInline waves>
                  <div className="md-form my-0">
                    <input
                      className="form-control mr-md-5"
                      type="text"
                      placeholder="Search for products"
                      aria-label="Search"
                    />
                  </div>
                </FormInline>
              </NavItem>
            </NavbarNav>
          </Collapse>
      </Navbar>
    );
  }
}

export default NavbarPage;