import React, { Component } from 'react';
import  EcommercePage  from './categories';
import Header from './Header';
import Footer from './Footer';

class Home extends Component{

    constructor(props){
        super(props);
        this.toggleAlert = this.toggleAlert.bind(this);
    }
    
    toggleAlert() {
        alert("Please login first and if you are first member then signup");
    }
    render(){
       
        return(
            <>
                <Header />
               <EcommercePage />
               
            </>
        );
    }
} 
export default Home;