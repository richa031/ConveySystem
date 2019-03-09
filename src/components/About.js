import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBAvatar, MDBCardBody, MDBIcon } from "mdbreact";

class TeamPage extends React.Component{
    render(){
        return (
            <MDBCard className="my-5 px-5 pb-5 text-center">
                <MDBCardBody>
                  <h2 className="h1-responsive font-weight-bold my-5">
                    Our amazing team
                  </h2>
                  <p className="grey-text w-responsive mx-auto mb-5">
                  It took their immense efforts to pull through this project.
                  </p>
                  <MDBRow>
                    <MDBCol lg="6" md="2" className="mb-lg-0 mb-5">
                      <img
                        tag="img"
                        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                        className="rounded-circle z-depth-1 img-fluid"
                        alt="Sample avatar"
                      />
                      <h5 className="font-weight-bold mt-4 mb-3">Akagra Gupta</h5>
                      <p className="text-uppercase blue-text">Backend Developer</p>
                      <p className="grey-text">
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                        consectetur, adipisci sed quia non numquam modi tempora eius.
                      </p>
                      <ul className="list-unstyled mb-0">
                        <a href="#!" className="p-2 fa-lg">
                          <MDBIcon icon="facebook" className="blue-text" />
                        </a>
                        <a href="#!" className="p-2 fa-lg">
                          <MDBIcon icon="twitter" className="blue-text" />
                        </a>
                        <a href="#!" className="p-2 fa-lg">
                          <MDBIcon icon="instagram" className="blue-text" />
                        </a>
                      </ul>
                    </MDBCol>
        
                    <MDBCol lg="6" md="2" className="mb-lg-0 mb-5">
                      <img
                        tag="img"
                        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg"
                        className="rounded-circle z-depth-1 img-fluid"
                        alt="Sample avatar"
                      />
                      <h5 className="font-weight-bold mt-4 mb-3">Richa Agarwal</h5>
                      <p className="text-uppercase blue-text">Frontend Developer</p>
                      <p className="grey-text">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        ipsa accusantium doloremque rem laudantium totam aperiam.
                      </p>
                      <ul className="list-unstyled mb-0">
                        <a href="#!" className="p-2 fa-lg">
                          <MDBIcon icon="facebook" className="blue-text" />
                        </a>
                        <a href="#!" className="p-2 fa-lg">
                          <MDBIcon icon="instagram" className="blue-text" />
                        </a>
                      </ul>
                    </MDBCol>

                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
          );

    }
}

export default TeamPage;