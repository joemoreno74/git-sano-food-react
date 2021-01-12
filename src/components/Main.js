import React, { Component } from 'react';
import Header from './Header';
import FoodMenu from './FoodMenu';
import ContactUs from './ContactUs';
import Locations from './Locations';
import Footer from './Footer';

class Main extends Component {

    render() {
        return (
            <div>
                <Header />
                <FoodMenu />
                <ContactUs />
                <Locations />
                <Footer />
            </div>
        );
    }
}

export default Main;