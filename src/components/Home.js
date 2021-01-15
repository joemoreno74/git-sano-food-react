import React, { Component, Fragment } from 'react';
import FoodMenu from './FoodMenu';
import ContactUs from './ContactUs';
import Locations from './Locations';
import Reservation from './Reservation';
import FoodCarousel from './FoodCarousel';

class Home extends Component {

    render() {
        return (
            <Fragment>
                    <div className="container">
                        <div className="row row-content align-items-center">
                            <div className="col-sm-10 mx-auto">
                                <FoodCarousel />
                            </div>  
                        </div>
                    </div>   
                    <div className="container">
                        <div className="row row-content align-items-center">
                            <div className="col-sm-10 mx-auto">
                                <FoodMenu />
                            </div>  
                        </div>
                    </div>
                    <div className="container">
                        <div className="row row-content align-items-center">
                            <div className="col-sm-10 mx-auto">
                             <Reservation />
                            </div>  
                        </div>
                    </div>
                    <div className="container">
                        <div className="row row-content align-items-center">
                            <div className="col-sm-10 mx-auto">
                            <Locations />
                            </div>  
                        </div>
                    </div>                    
                    <div className="container">
                        <div className="row row-content align-items-center">
                            <div className="col-sm-10 mx-auto">
                            <ContactUs />
                            </div>  
                        </div>
                    </div>  
            </Fragment>    
        );
    }
}

export default Home;