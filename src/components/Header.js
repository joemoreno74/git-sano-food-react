import React, { Component }  from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
   constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                 <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>Allow yourself</h1>
                                <h2>enjoy a healthy taste</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                <Navbar dark sticky="top" expand="md">
                    <div className="container"> 
                    <NavbarBrand className="mr-auto" href="/"><img src="/assets/img/sano-food-logo.png" height="120" width="120" alt="Sano Food Logo" /></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home" 
                                    style={{color: 'black', textDecoration: 'none'}} activeStyle={{color: 'green', textDecoration: 'none'}}>
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu"
                                     style={{color: 'black', textDecoration: 'none'}} activeStyle={{color: 'green', textDecoration: 'none'}}>
                                        <i className="fa fa-info fa-lg" /> Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/reservation"
                                     style={{color: 'black', textDecoration: 'none'}} activeStyle={{color: 'green', textDecoration: 'none'}}>
                                        <i className="fa fa-info fa-lg" /> Reservation
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus"
                                     style={{color: 'black', textDecoration: 'none'}} activeStyle={{color: 'green', textDecoration: 'none'}}>
                                        <i className="fa fa-address-card fa-lg" /> Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;
