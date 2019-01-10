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
                <Form className="form-inline my-2 my-lg-0">
                
                    <Button className="btn btn-secondary my-2 mr-sm-2"  onClick={this.toggleAlert}>
                        <span className="login"></span>need
                    </Button>
                    <Button className="btn btn-info my-2 my-sm-2"  onClick={this.toggleAlert}>
                        <span className="Signup"></span>bring
                    </Button>
                </Form>
            </div>
        );
    }
} 
export default Home;