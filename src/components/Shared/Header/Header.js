import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
            <Navbar className="custom-nav" collapseOnSelect expand="md" variant="dark">
            <Container>
            <Navbar.Brand className="custom-nav-responsive"><Link to="/">Mohammad Tareq</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="custom-link ml-auto">
                    <Link to="/">Home</Link>
                    <Link to="/about">About Me</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/blogs">Blog</Link>
                    <Link to="/contact">Contact</Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;