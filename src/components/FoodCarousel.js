import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from "mdbreact";
import SANOFOODIMG from '../shared/SanoFoodImg';

function CreateFoodImg(props) {
    console.log(props.ident);
     return (
            <MDBCarouselItem itemId={props.ident} >
              <MDBView>
                <img
                  className="d-block w-100"
                  src={props.src}
                  alt={props.alt}
                />
              <MDBMask overlay="black-light" />
              </MDBView>
              <MDBCarouselCaption className="carousel-caption">
                <h3 className="h3-responsive">{props.alt}</h3>
              </MDBCarouselCaption>
            </MDBCarouselItem>  
        ); 
}

function createFood(img){
    return (
      <CreateFoodImg
        ident={img.ident}
        src={img.src}
        alt={img.alt}
      />
    );
}

class FoodCarousel extends React.Component {

    render() {
      return (
        <MDBContainer align="center">
            <MDBCarousel
                activeItem={ SANOFOODIMG.length > 0 ? 1 : null } 
                length={SANOFOODIMG.length}
                showControls={true}
                showIndicators={true}
                className="z-depth-1"
            >
            <MDBCarouselInner className="d-block w-75" >  
                {SANOFOODIMG.map(createFood)}
            </MDBCarouselInner>    
            </MDBCarousel>
        </MDBContainer>    
      );
    }    
  
}

export default FoodCarousel;