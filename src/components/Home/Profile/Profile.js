import React from 'react';
import './Profile.css';
import profile from '../../../images/profile/tareqCircleMain.png';
import cv from '../../../files/Mohammad Tareq.pdf';
import { Col, Row } from 'react-bootstrap';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Typical from 'react-typical'
const Profile = () => {
    return (
        <div className="profile">
            <Row className="d-flex align-items-center">
                <Col xs={2} sm={3} md={2}></Col>
                <Col xs={8} sm={6} md={3}>
                    <img src={profile} alt="" />
                </Col>
                <Col className="text-white" xs={12} sm={12} md={7}>
                    <h3>Hello, I'm <span className="profile-name">Mohammad Tareq</span> </h3>
                    <div className="d-flex">
                    <h4>I'm a</h4>
                    <Typical className="profile-type"
                        steps={['Front-end Developer', 3000, 'Web Developer', 3000,'Javascript Engineer',3000]}
                        loop={Infinity}
                        wrapper="h4"
                    />
                    </div>
                    <div className="social-icon">
                        <a href="https://www.facebook.com/mddtareq" target="_blank"><FaFacebookF /></a>
                        <a href="https://twitter.com/mddtareq" target="_blank"><FaTwitter /></a>
                        <a href="https://github.com/mddtareq" target="_blank"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/mddtareq/" target="_blank"><FaLinkedinIn /></a>
                    </div>
                    {/* <br/><br/> <br/>
                    <div className="cv">
                    <a href={cv} target="_blank" download>Download CV</a>
                    </div> */}
                </Col>
            </Row>
        </div>
    );
};

export default Profile;