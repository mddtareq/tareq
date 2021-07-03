import React from 'react';
import './SingleProject.css'
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleProject = ({ project }) => {
    return (
        <Col className="custom-card" md={4}>
            <Card className='single-project'>
                <Card.Img variant="top" src={project.image1} />
                <Card.Body>
                    <Card.Title>
                        <Link to={"/project/"+project.id}>
                            {project.name}
                        </Link>
                    </Card.Title>
                    <Card.Text className="custom-text">
                        {project.description}
                    </Card.Text>
                    <div className="link d-flex justify-content-between">
                        <a href={project.liveLink} target="_blank">Live Link</a>
                        <a href={project.repositoryLink} target="_blank">Repository Link</a>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleProject;