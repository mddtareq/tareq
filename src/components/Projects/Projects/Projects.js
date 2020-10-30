import React, { useEffect, useState } from 'react';
import './Projects.css'
import { Container } from 'react-bootstrap';
import projects from '../../../Data/projects'
import SingleProject from '../SingleProject/SingleProject';

const Projects = () => {
    const [category, setCategory] = useState('all');
    const [project, setProject] = useState(projects);
    const [filter, setFilter] = useState([]);
    useEffect(() => {
        if (category === 'all') {
            return setFilter(project);
        }
        if (category === 'basic') {
            return setFilter(project.filter(project => project.type === 'basic'));
        }
        if (category === 'react') {
            return setFilter(project.filter(project => project.type === 'react'));
        }
    }, [category, project])
    return (
        <Container>
            <div className="projects">
                <h1>Projects</h1>
                <div className="newline"></div>
            </div>
            <div className="category d-flex justify-content-end">
                <button onClick={() => setCategory('all')}>All</button>
                <button onClick={() => setCategory('basic')}>Basic</button>
                <button onClick={() => setCategory('react')}>React</button>
                <button>Angular</button>
            </div>
            <div className="row">
                {filter.map(project => <SingleProject key={project.id} project={project}></SingleProject>)}
            </div>
        </Container>
    );
};

export default Projects;