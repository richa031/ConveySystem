import React, { Component } from 'react';
import  EcommercePage  from './categories';



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
               <EcommercePage />
                
            </div>
        );
    }
} 
export default Home;