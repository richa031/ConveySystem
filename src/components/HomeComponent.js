import React, { Component } from 'react';
import  Header  from './HeaderComponent';
import { Footer } from './Footer';
import { Form, Button } from 'reactstrap';

//import { Button, Form } from 'react-materialize';



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
            <div className="container">
                What do you wanna do?
                
            </div>
        );
    }
} 
export default Home;