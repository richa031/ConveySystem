import React, { Component } from 'react';
import PrimarySearchAppBar from './navbar';
import { Jumbotron, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component{

    constructor(props){
        super(props);
        this.state={
            isNavOpen: false
           
        };
        this.toggleNav = this.toggleNav.bind(this);
        
    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    

    render(){
        return(//using React fragments
            <>
            
            <PrimarySearchAppBar /> 
                
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>The Convey System</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
            
            
            </>
        );
    }
}
export default Header;