import React, { Component } from 'react';
import Header from './Header';
import FoodMenu from './FoodMenu';
import ContactUs from './ContactUs';
import Locations from './Locations';
import Footer from './Footer';
import Reservation from './Reservation';
import FoodCarousel from './FoodCarousel';

class Main extends Component {

    render() {
        return (
            <div>
                <Header />
                <FoodCarousel />
                <FoodMenu />
                <ContactUs />
                <Locations />
                <Reservation />
                <Footer />
            </div>
        );
    }
}

export default Main;