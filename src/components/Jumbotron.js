import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBIcon } from "mdbreact";
import {Modal, ModalBody, Form} from 'reactstrap';

class JumbotronPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isModalOpen: false,
      isModalOpen2: false
    };
   
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.toggleModal2 = this.toggleModal2.bind(this);
  }
  
  toggleModal() {
    this.setState({
        isModalOpen: !this.state.isModalOpen
    });
  }

  toggleModal2() {
    this.setState({
        isModalOpen2: !this.state.isModalOpen2 
    });
  }
  
  handleLogin(event) {
    this.toggleModal();
    alert("logged in successfully");
    event.preventDefault();

}
  render(){
    return (
      <div>
      <MDBContainer className="mt-5 text-center">
        <MDBRow>
          <MDBCol>
            <MDBJumbotron>
              <h2 className="h1 display-3">Hello, world!</h2>
              <p className="lead">
                This is a simple hero unit, a simple Jumbotron-style component for
                calling extra attention to featured content or information.
              </p>
              <hr className="my-2" />
              <p>
                It uses utility classes for typgraphy and spacing to space content out
                within the larger container.
              </p>
              <p className="lead">
                <MDBBtn color="default" onClick={this.toggleModal}>Learn More</MDBBtn>
              </p>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

        {/*Modal for login form */}
      <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
      <ModalBody>
        <Form onSubmit={this.handleLogin}>
      <MDBContainer>
      <MDBRow>
        <MDBCol md="12">
          <MDBCard>
            <div className="header pt-3 default-color lighten-4">
              <MDBRow className="d-flex justify-content-start">
                <h3 className="white-text mt-3 mb-4 pb-1 mx-5">
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
                <MDBBtn color="default" type="submit" value="submit" className="btn-block z-depth-2">Log in</MDBBtn>
              </div>
              <p className="font-small grey-text d-flex justify-content-center">
                Don't have an account?
                <a onClick={this.toggleModal2} className="dark-grey-text font-weight-bold ml-1">Sign Up</a>
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </Form>
    </ModalBody>
    </Modal>

      {/*Modal for signup form */}
    <Modal isOpen={this.state.isModalOpen2} toggle={this.toggleModal2}>
      <ModalBody>
      <Form>
      <MDBContainer>
      <MDBRow>
        <MDBCol md="12">
          <MDBCard>
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="teal-text mb-5">
                  <strong>Sign up</strong>
                </h3>
              </div>
              <MDBInput label="Your email" group type="text" validate />
              <MDBInput label="Your password" group type="password" validate />
              <div className="md-form pb-3">
                <div className="form-check my-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="defaultCheck12"
                  />
                  <label htmlFor="defaultCheck12" className="grey-text">
                    Accept the
                    <a href="#!" className="blue-text">

                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <MDBRow className="d-flex align-items-center mb-4">
                <MDBCol md="6" className="text-center">
                  <button
                    type="button"
                    className="btn btn-default btn-block btn-rounded z-depth-1"
                  >
                    Sign up
                  </button>
                </MDBCol>
                <MDBCol md="6">
                  <p className="font-small grey-text d-flex justify-content-end">
                    Have an account?
                    <a onClick={this.toggleModal} className="blue-text ml-1">

                      Log in
                    </a>
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
            <MDBRow>
              <MDBCol md="12">
            <div className="footer pt-3 teal lighten-2">
              <MDBRow className="d-flex justify-content-center">
                <p className="font-small white-text mb-2 pt-3">
                  or Sign up with:
                </p>
              </MDBRow>
              <MDBRow className="mt-2 mb-3 d-flex justify-content-center">
                <a href="#!" className="fa-lg p-2 m-2 fb-ic">
                  <MDBIcon className="fa fa-facebook white-text fa-lg"> </MDBIcon>
                </a>
                <a href="#!" className="fa-lg p-2 m-2 tw-ic">
                  <MDBIcon className="fa fa-twitter white-text fa-lg"> </MDBIcon>
                </a>
                <a href="#!" className="fa-lg p-2 m-2 gplus-ic">
                  <MDBIcon className="fa fa-google-plus white-text fa-lg"> </MDBIcon>
                </a>
              </MDBRow>
            </div>
            </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </Form>
    </ModalBody>
    </Modal>
    </div>
    );
  }
  
}

export default JumbotronPage;