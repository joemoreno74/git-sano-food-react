import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import SANOLOCATIONS from '../shared/SanoLocations';


function CreateDetailLocations(props) {
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
              <p><FontAwesomeIcon icon={faHome} size="1x" color="white" /> {props.address}</p>
              <p><FontAwesomeIcon icon={faEnvelope} size="1x" color="white" /> {props.email}</p>
              <p><FontAwesomeIcon icon={faPhone} size="1x" color="white" /> {props.phone}</p> 
            </MDBCarouselCaption>
          </MDBCarouselItem>  
      ); 
}


function createLocations(location){
  return (
    <CreateDetailLocations
      ident={location.ident}
      src={location.src}
      alt={location.alt}
      address={location.address}
      email={location.email}
      phone={location.phone}
    />
  );
}

class Locations extends React.Component {
  render() {
    return (
      <MDBContainer align="center">
      <h1 className="text-center">Our Locations</h1> 
       <MDBCarousel
         activeItem={ SANOLOCATIONS.length > 0 ? 1 : null } 
         length={SANOLOCATIONS.length}
         showControls={true}
         showIndicators={true}
         className="z-depth-1"
         >
         <MDBCarouselInner className="d-block w-75" >  
          {SANOLOCATIONS.map(createLocations)}
          </MDBCarouselInner>    
        </MDBCarousel>
      </MDBContainer>    
    );
    }    

}  

export default Locations;