import React, { Component } from 'react';
import Header from './Header';
import FoodMenu from './FoodMenu';
import ContactUs from './ContactUs';
import Footer from './Footer';
import Reservation from './Reservation';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Main extends Component {

    render() {
        return (
            <div>
                <Header />
                    <TransitionGroup>
                        <CSSTransition classNames="page" timeout={3000}>
                            <Switch>
                                <Route path='/home' render={() => <Home />}/>
                                <Route exact path='/menu' render={() => <FoodMenu />}/>
                                <Route exact path='/reservation' render={() => <Reservation />}/>
                                <Route exact path='/contactus' render={() => <ContactUs />} />
                                <Redirect to='/home' />
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>    
                <Footer />
            </div>
   
        );
    }
}

export default Main;