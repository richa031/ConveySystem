import React from "react";
import { Fa,Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, FormInline, Dropdown, DropdownToggle, DropdownMenu,  DropdownItem, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput } from "mdbreact";
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
    this.setState({ 
      isOpen: !this.state.isOpen 
    });
  } 
  
  toggleModal() {
    this.setState({
        isModalOpen: !this.state.isModalOpen
    });
  }

  render() {
    return (
      <div>
      <Navbar color="default-color-dark" dark expand="md">
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
                <NavLink to="/home">Home</NavLink>
              </NavItem>
              <NavItem>
                <Dropdown>
                  <DropdownToggle nav caret>
                    <div className="d-none d-md-inline">Categories</div>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem href="/categories/grocery">Grocery</DropdownItem>
                    <DropdownItem href="#!">Books {`&`} Stationery</DropdownItem>
                    <DropdownItem href="#!">Electronics</DropdownItem>
                    <DropdownItem href="#!">Sports {`&`} Fitness</DropdownItem>
                    <DropdownItem href="#!">Accessories</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
              <NavItem>
                <NavLink to="/aboutus">About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contactus">Contact Us</NavLink>
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
      <ModalBody>
      <MDBContainer>
      <MDBRow>
        <MDBCol md="12">
          <MDBCard>
            <div className="header pt-3 grey lighten-2">
              <MDBRow className="d-flex justify-content-start">
                <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                  Log in
                </h3>
              </MDBRow>
            </div>
            <MDBCardBody className="mx-4 mt-4">
              <MDBInput label="Your email" group type="text" validate />
              <MDBInput
                label="Your password"
                group
                type="password"
                validate
                containerClass="mb-0"
              />
              <p className="font-small grey-text d-flex justify-content-end">
                Forgot
                <a href="#!" className="dark-grey-text font-weight-bold ml-1">
                  Password?
                </a>
              </p>
              <div className="text-center mb-4 mt-5">
                <MDBBtn color="default" type="button" className="btn-block z-depth-2">Log in</MDBBtn>
              </div>
              <p className="font-small grey-text d-flex justify-content-center">
                Don't have an account?
                <a href="#!" className="dark-grey-text font-weight-bold ml-1">Sign up</a>
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </ModalBody>
    </Modal>
    </div>
    );
  }
}

export default NavbarPage;