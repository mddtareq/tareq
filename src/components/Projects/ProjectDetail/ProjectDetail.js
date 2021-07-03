import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import projects from '../../../Data/projects';
import './ProjectDetail.css';
const ProjectDetail = () => {
    const { id } = useParams();
    const foundProject = projects.find(project => project.id === parseFloat(id));
    return (
        <Container className="project-detail">
            <h1>Project Detail : {foundProject.name}</h1>
            <div className="newline"></div>
            <div className="image-group">
            <img src={foundProject.image1} alt="" />
            <img src={foundProject.image2} alt="" />
            </div>
            <h6>Project Description : {foundProject.description}</h6>
            <h6>Technology Used : {foundProject.technology}</h6>
            <h6>Live Link : <a href={foundProject.liveLink} target="_blank">{foundProject.name}</a> </h6>
            <h6>Repository Link : <a href={foundProject.repositoryLink} target="_blank">{foundProject.name}</a> </h6>
        </Container>
    );
};

export default ProjectDetail;