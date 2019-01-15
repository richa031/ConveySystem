import React, { Component } from 'react';
import PrimarySearchAppBar from './navbar';
import { Jumbotron, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import NavbarPage from './Nav';
import CarouselPage from './Carousel';
import JumbotronPage from './Jumbotron';

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
                <CarouselPage/>
                <JumbotronPage />   
           </>
        );
    }
}
export default Header;