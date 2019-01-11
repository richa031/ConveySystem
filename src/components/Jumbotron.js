import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput } from "mdbreact";
import {Modal, ModalHeader, ModalBody, Form} from 'reactstrap';

class JumbotronPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isModalOpen: false
    };
   
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  
  toggleModal() {
    this.setState({
        isModalOpen: !this.state.isModalOpen
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

      <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
      <ModalBody>
        <Form onSubmit={this.handleLogin}>
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
                <MDBBtn color="default" type="submit" value="submit" className="btn-block z-depth-2">Log in</MDBBtn>
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
    </Form>
    </ModalBody>
    </Modal>
      </div>
    );
  }
  
}

export default JumbotronPage;