/* eslint-disable react/jsx-pascal-case */
import React, { Component }  from 'react';
import {  Button, Label, Container, Row, Col } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

//Still need to find a way to code the Datepicker at line: 199
class Reservation extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            guestNum: '',
            date: '',
            time: '',
            location: '',
            touched: {
                firstName: false,
                lastName: false,
                phoneNum: false,
                email: false,
                guestNum: false,
                date: false,
                time: false,
                location: false,
            }
        };

        this.handleSubmit = this.handleSubmit.bind(this);
     }

     handleSubmit(values) {
        console.log(JSON.stringify(values));
        alert(JSON.stringify(values));
    }

    render() {
        return(
            <>
                <Container>
                    <Row>
                        <Col sm={12} md={{ size: 6, offset: 3 }}>
                        <h1 className="text-center">Book Your Table</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col
                        style={{background: 'green'}}
                        sm={12}>
                        <h1 
                        style={{color: 'white'}}
                        className="text-center">Reservation</h1>
                        </Col>
                    </Row>
                        <LocalForm onSubmit={values => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstName" md={2}>First Name</Label>
                                    <Col md={10}>
                                        <Control.text model=".firstName" id="firstName" name="firstName"
                                            placeholder="First Name"
                                            className="form-control"
                                            validators={{
                                                required, 
                                                minLength: minLength(2),
                                                maxLength: maxLength(15)
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".firstName"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be at least 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                        />
                                    </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastName" md={2}>Last Name</Label>
                                    <Col md={10}>
                                        <Control.text model=".lastName" id="lastName" name="lastName"
                                            placeholder="Last Name"
                                            className="form-control"
                                            validators={{
                                                required, 
                                                minLength: minLength(2),
                                                maxLength: maxLength(15)
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".lastName"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be at least 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                        />
                                    </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="phoneNum" md={2}>Phone</Label>
                                    <Col md={10}>
                                        <Control.text model=".phoneNum" id="phoneNum" name="phoneNum"
                                            placeholder="Phone number"
                                            className="form-control"
                                            validators={{
                                                required,
                                                minLength: minLength(10),
                                                maxLength: maxLength(15),
                                                isNumber
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".phoneNum"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be at least 10 numbers',
                                                maxLength: 'Must be 15 numbers or less',
                                                isNumber: 'Must be a number'
                                            }}
                                        />
                                    </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                    <Col md={10}>
                                        <Control.text model=".email" id="email" name="email"
                                            placeholder="Email"
                                            className="form-control"
                                            validators={{
                                                required,
                                                validEmail
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".email"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                validEmail: 'Invalid email address'
                                            }}
                                        />
                                    </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="guestNum" md={2}>Number of Guest</Label>
                                    <Col md={10}>
                                        <Control.select model=".guestNum" id="guestNum" name="guestNum"
                                            className="form-control"
                                            validators={{
                                                required,
                                            }}
                                        >
                                            <option selected disabled>Select number of Guest</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                        </Control.select>
                                        <Errors
                                            className="text-danger"
                                            model=".guestNum"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                            }}
                                        />
                                    </Col>
                            </Row>
                            {/* Date picker needed here. */}
                            <Row className="form-group">
                                <Label htmlFor="date" md={2}>Date</Label>
                                    <Col md={10}>
                                        <Control model=".date" id="date" name="date"
                                            className="form-control"
                                            validators={{
                                                required,
                                            }}

                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".date"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                            }}
                                        />
                                    </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="time" md={2}>Time</Label>
                                    <Col md={10}>
                                        <Control.select model=".time" id="time" name="time"
                                            className="form-control"
                                            validators={{
                                                required,
                                            }}
                                        >
                                            <option selected disabled>Select a Time</option>
                                            <option>10:00 AM</option>
                                            <option>11:00 AM</option>
                                            <option>12:00 PM</option>
                                            <option>01:00 PM</option>
                                            <option>02:00 PM</option>
                                            <option>03:00 PM</option>
                                            <option>04:00 PM</option>
                                            <option>05:00 PM</option>
                                            <option>06:00 PM</option>
                                            <option>07:00 PM</option>
                                            <option>08:00 PM</option>
                                            <option>09:00 PM</option>
                                        </Control.select>
                                        <Errors
                                            className="text-danger"
                                            model=".time"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                            }}
                                        />
                                    </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="location" md={2}>Location</Label>
                                    <Col md={10}>
                                        <Control.select model=".location" id="location" name="location"
                                            className="form-control"
                                            validators={{
                                                required,
                                            }}
                                        >
                                            <option selected disabled>Select a Location</option>
                                            <option>Denver</option>
                                            <option>Miami Beach</option>
                                            <option>Jacksonville</option>
                                            <option>Philadelphia</option>
                                            <option>Los Angeles</option>
                                            <option>Orlando</option>
                                        </Control.select>
                                        <Errors
                                            className="text-danger"
                                            model=".location"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                            }}
                                        />
                                    </Col>
                            </Row>
                            <Row className="form-group">
                                    <Col md={{size: 10, offset: 2}}>
                                        <Button type="submit" color="success">
                                            Reserve Now
                                        </Button>
                                    </Col>
                                </Row>   
                        </LocalForm>
                </Container>
            </>
        );
    }
}

export default Reservation;