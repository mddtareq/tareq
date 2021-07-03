import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleBlog.css';
const SingleBlog = ({ blog }) => {
    return (
        <Col className="custom-card-blog" md={4}>
            <Card className='single-blog'>
                <Card.Img variant="top" src={blog.image1} />
                <Card.Body>
                    <Card.Title className="custom-title">
                        <Link to={"/blog/" + blog.id}>
                            {blog.name}
                        </Link>
                    </Card.Title>
                    <Card.Text className="custom-text">
                        {blog.description.slice(0,40)}...
                    </Card.Text>
                    <div className="link d-flex justify-content-between">
                        <a href={blog.liveLink} target="_blank">Blog Link</a>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleBlog;