import React, { Component } from "react";
import { Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask } from "mdbreact";

class CarouselPage extends Component {
  render() {
    return (
      <Carousel activeItem={1} length={6} showControls={true} showIndicators={true} className="z-depth-1">
        <CarouselInner>
          <CarouselItem itemId="1">
            <View>
              <img className="d-block w-100" src="/assets/images/10.jpg" alt="First slide" />
              <Mask overlay="black-light" />
            </View>
            <CarouselCaption>
              <h3 className="h3-responsive">Light mask</h3>
              <p>First text</p>
            </CarouselCaption>
          </CarouselItem>
          <CarouselItem itemId="2">
            <View>
              <img className="d-block w-100" src="/assets/images/11.jpg" alt="Second slide" />
              <Mask overlay="black-slight" />
            </View>
            <CarouselCaption>
              <h3 className="h3-responsive">Strong mask</h3>
              <p>Second text</p>
            </CarouselCaption>
          </CarouselItem>
          <CarouselItem itemId="3">
            <View>
              <img className="d-block w-100" src="/assets/images/12.jpg" alt="Third slide" />
              <Mask overlay="black-slight" />
            </View>
            <CarouselCaption>
              <h3 className="h3-responsive">Slight mask</h3>
              <p>Third text</p>
            </CarouselCaption>
          </CarouselItem>
          <CarouselItem itemId="4">
            <View>
              <img className="d-block w-100" src="/assets/images/13.jpg" alt="Mattonit's item" />
              <Mask overlay="black-light" />
            </View>
            <CarouselCaption>
              <h3 className="h3-responsive">Sopot Beach</h3>
              <p>Taken june 21th by @mattonit</p>
            </CarouselCaption>
          </CarouselItem>
          <CarouselItem itemId="5">
            <View>
              <img className="d-block w-100" src="/assets/images/14.jpg" alt="Mattonit's item" />
              <Mask overlay="black-light" />
            </View>
            <CarouselCaption>
              <h3 className="h3-responsive">Sopot Beach</h3>
              <p>Taken june 21th by @mattonit</p>
            </CarouselCaption>
          </CarouselItem>
          <CarouselItem itemId="6">
            <View>
              <img className="d-block w-100" src="/assets/images/15.jpg" alt="Mattonit's item" />
              <Mask overlay="black-light" />
            </View>
            <CarouselCaption>
              <h3 className="h3-responsive">Sopot Beach</h3>
              <p>Taken june 21th by @mattonit</p>
            </CarouselCaption>
          </CarouselItem>
        </CarouselInner>
      </Carousel>
    );
  }
}

export default CarouselPage;