import React, { Component }  from 'react';
import { Nav, NavItem, Jumbotron, Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Footer extends Component {

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
        return(
            <>
                <Jumbotron fluid>
                    <Container>
                        <Row>
                            <Col xs="6" sm="4">
                            <h6> SANO FOOD </h6>
                            <p> Healthy food with a lot of different options. Enjoy our restaurants across the US. </p>
                            </Col>
                            <Col xs="6" sm="4">
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home" 
                                    style={{color: 'black', textDecoration: 'none'}} activeStyle={{color: 'green', textDecoration: 'none'}}> 
                                    <h6> HOME </h6>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus"
                                    style={{color: 'black', textDecoration: 'none'}} activeStyle={{color: 'green', textDecoration: 'none'}}> About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu"
                                     style={{color: 'black', textDecoration: 'none'}} activeStyle={{color: 'green', textDecoration: 'none'}}> Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/reservation"
                                     style={{color: 'black', textDecoration: 'none'}} activeStyle={{color: 'green', textDecoration: 'none'}}> Reservation
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/blog"
                                     style={{color: 'black', textDecoration: 'none'}} activeStyle={{color: 'green', textDecoration: 'none'}}> Blog
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus"
                                     style={{color: 'black', textDecoration: 'none'}} activeStyle={{color: 'green', textDecoration: 'none'}}> Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            </Col>
                            <Col sm="4">
                                <h6> MAIN CONTACT </h6>
                                <p> Miami Beach, FL 33139, US </p>
                                <p> info@sano-food.com </p>
                                <p> +1 305 567 88 </p>
                            </Col>
                        </Row>
                    
                    </Container>
                </Jumbotron>
            </>
        );
    }
}

export default Footer;