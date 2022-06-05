import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="images/img-9.jpg" />
                    <p className="legend" alt= "abc1">Legend 1</p>
                </div>
                <div>
                    <img src="images/img-9.jpg" />
                    <p className="legend" alt= "abc2">Legend 2</p>
                </div>
                <div>
                    <img src="images/img-9.jpg" />
                    <p className="legend" alt= "abc3">Legend 3</p>
                </div>
            </Carousel>
        );
    }
}

export default DemoCarousel
