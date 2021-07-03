import React from 'react';
import './Contact.css';
import { Col, Container, Row } from 'react-bootstrap';
import { faAddressCard, faMailBulk, faMap, faMapMarked, faMapMarker, faMapSigns, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
    return (
        <Container>
            <h1 style={{ color: 'white' }}>Contact</h1>
            <div className="newline"></div>
            <Row className="contact">
                <Col md={4} sm={6}>
                    <div style={{ color: 'white' }} className="location text-center">
                        <FontAwesomeIcon size='2x' icon={faMap} />
                        <h5>Khilgaon,Dhaka.</h5>
                    </div>
                </Col>
                <Col style={{ marginBottom: '10px' }} md={4} sm={6}>
                    <div style={{ color: 'white' }} className="phone text-center">
                        <FontAwesomeIcon style={{ color: 'white' }} size='2x' icon={faPhone} />
                        <h5>+8801982667024</h5>
                    </div>
                </Col>
                <Col md={4} >
                    <div style={{ color: 'white' }} className="email text-center">
                        <FontAwesomeIcon style={{ color: 'white' }} size='2x' icon={faMailBulk} />
                        <h5>mdtareq320@gmail.com</h5>
                    </div>
                </Col>
                <Col style={{ color: 'white' }} md={{ span: 8, offset: 2 }}>
                    <div className="touch">
                        <h4 style={{ textDecoration: 'underline', marginBottom: '15px' }}>Get In Touch</h4>
                        <form action="">
                            <div className="row">
                                <div className="col-md-6 col-sm-6">
                                    <input className="form-control" type="text" placeholder="Name" required />
                                    <input className="form-control" type="email" placeholder="Email" required />
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <textarea className="form-control" rows="4" placeholder="Message"></textarea>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <input className="custom-submit" value="Submit" type="submit" />
                                </div>
                            </div>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;