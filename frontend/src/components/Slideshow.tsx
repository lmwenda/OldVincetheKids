import React from 'react';
import { Carousel } from "react-bootstrap";

// Images
import Image1 from "./Images/Image1.jpg";
import Image2 from "./Images/VincetheKid.jpg";
import Image3 from "./Images/Vincents.jpg";
import Image4 from "./Images/VincentsEgyptArt.jpg";

function SlideShow(){
    const mql = window.matchMedia('(max-width: 769px)');
    let mobileView = mql.matches;
    if (mobileView) {
        return(
            <Carousel style={{ background: '#222', borderRadius: '4px', transition: 'all 0.6s ease' }}>
                <Carousel.Item>
                    <img
                    className="d-block w-100 h-100"
                    src={Image1}
                    style={{borderRadius: '4px'}}
                    alt=""
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Image2}
                    style={{borderRadius: '4px'}}
                    alt=""
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Image3}
                    id="large-image"
                    style={{borderRadius: '4px'}}
                    alt=""
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Image4}
                    id="large-image"
                    style={{borderRadius: '4px'}}
                    alt=""
                    />
                </Carousel.Item>
            </Carousel>
        );
      } else {
        return(
            <Carousel style={{ background: '#222', borderRadius: '4px' }}>

                <Carousel.Item>
                    <img
                    className="d-block w-100 h-100"
                    src={Image1}
                    style={{borderRadius: '4px'}}
                    alt=""
                    />
                </Carousel.Item>
                
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Image2}
                    style={{borderRadius: '4px'}}
                    alt=""
                    />
                </Carousel.Item>
            
            </Carousel>
        );
    }
}

export default SlideShow;