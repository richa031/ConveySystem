import React from "react";
import { Fa,Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, FormInline, Dropdown, DropdownToggle, DropdownMenu,  DropdownItem, MDBBtn } from "mdbreact";
import {Modal, ModalHeader, ModalBody} from 'reactstrap';

class NavbarPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
      isModalOpen: false
    };
    this.toggleCollapse = this.toggleCollapse.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }
  

  toggleCollapse(){
    this.setState({ isOpen: !this.state.isOpen });
  } 
  
  toggleModal() {
    this.setState({
        isModalOpen: !this.state.isModalOpen
    });
  }

  render() {
    return (
      <div>
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
                  <Fa className="text-white" icon="search"  />
                    <input
                      className="form-control col-md-12"
                      type="text"
                      placeholder="Search for products"
                      aria-label="Search"
                    />
                  </div>
                </FormInline>
              </NavItem>
            </NavbarNav>

            <NavbarNav right>
              <NavItem>
                <FormInline waves>
                  <div className="md-form my-0">
                  <MDBBtn outline color="white" onClick={this.toggleModal}>Login</MDBBtn>
                  </div>
                </FormInline>
              </NavItem>
            </NavbarNav>
          </Collapse>
        </Navbar>
      <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
        <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
      </Modal>
      </div>
    );
  }
}

export default NavbarPage;