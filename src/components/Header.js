import React, { Component } from 'react';
import CarouselPage from './Carousel';
import JumbotronPage from './Jumbotron';

class Header extends Component{

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