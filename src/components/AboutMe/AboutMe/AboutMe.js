import React from 'react';
import { Container } from 'react-bootstrap';
import './AboutMe.css';
import tareq from '../../../images/profile/portar.jpg'
import cv from '../../../files/Mohammad Tareq.pdf';

const AboutMe = () => {
    return (
        <Container>
            <h1 style={{color: 'white'}}>About Me</h1>
                <div className="newline"></div>
                <br/>
            <div className="row about d-flex align-items-center">
                <div className="col-md-6">
                    <img src={tareq} alt="" />
                </div>
                <div className="col-md-6">
                    <p>
                        I want to build my career as a professional Web developer. Currently, I am working as a Web developer at Antopolis. I completed my B.Sc. in Computer Science and Engineering at American International University-Bangladesh. I have great knowledge of React, ES6, JavaScript, HTML5, CSS3, jQuery, MongoDB, Firebase, MySql, PHP, etc. Also, I have some interest in Python, Data Security, and machine learning.
                    </p>
                    
                    <a href={cv} target="_blank" download>Download CV</a>
                </div>
            </div>
        </Container>
    );
};

export default AboutMe;