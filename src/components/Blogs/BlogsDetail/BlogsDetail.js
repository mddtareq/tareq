import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './BlogsDetail.css';
import blogs from '../../../Data/blogs';
const BlogsDetail = () => {
    const { id } = useParams();
    const foundBLog = blogs.find(blog => blog.id === parseFloat(id));
    return (
        <Container className="blog-detail">
        <h1>Project Detail : {foundBLog.name}</h1>
        <div className="newline"></div>
        <div className="image-group">
        <img src={foundBLog.image1} alt="" />
        </div>
        <h3>Blog Type : {foundBLog.type}</h3>
        <h6>{foundBLog.detail}</h6>
        <h6>Full Article : <a href={foundBLog.liveLink} target="_blank">{foundBLog.name}</a> </h6>
        </Container>
    );
};

export default BlogsDetail;