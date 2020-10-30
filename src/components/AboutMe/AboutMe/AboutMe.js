import React from 'react';
import { Container } from 'react-bootstrap';
import './AboutMe.css';
import tareq from '../../../images/projectImages/portar.JPG'
import cv from '../../../files/Mohammad Tareq.pdf';

const AboutMe = () => {
    return (
        <Container>
            <div className="row about">
                <div className="col-md-6">
        <img src={tareq} alt=""/>
                </div>
                <div className="col-md-6">
                    <h5>
                        I want to build my career as a professional Web developer. Currently, I am working as a Web developer at Antopolis. I completed my B.Sc. in Computer Science and Engineering at American International University-Bangladesh. I have great knowledge of React, ES6, JavaScript, HTML5, CSS3, jQuery, MongoDB, Firebase, MySql, PHP, etc. Also, I have some interest in Python, Data Security, and machine learning.
                    </h5>
                    <br/>
                    <a href={cv} target="_blank">Download CV</a>
                </div>
            </div>
        </Container>
    );
};

export default AboutMe;