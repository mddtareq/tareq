import React from 'react';
import './Profile.css';
import profile from '../../../images/tareq.png';
import cv from '../../../files/Mohammad Tareq.pdf';
import { Col, Row } from 'react-bootstrap';
const Profile = () => {
    const workType = [{ type: 'Web Developer' },
    // { type: 'Front-end Developer' },
    // { type: 'Javascript Engineer' }
]
    return (
        <div className="profile">
            <Row className="d-flex align-items-center">
                <Col md={6}>
                    {/* <img src={profile} alt="" /> */}
                </Col>
                <Col className="cv" md={6}>
                    <h1>Hello, I'm <span>Mohammad Tareq</span> </h1>
                    <h1>I'm a {workType.map(work => work.type)}</h1>
                    <br/><br/> <br/>
                    <a href={cv} target="_blank">Download CV</a>
                </Col>
            </Row>
        </div>
    );
};

export default Profile;