import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import blogs from '../../../Data/blogs';
import SingleBlog from '../SingleBlog/SingleBlog';

const Blogs = () => {
    const [category, setCategory] = useState('all');
    const [project, setProject] = useState(blogs);
    const [filter, setFilter] = useState([]);
    useEffect(() => {
        if (category === 'all') {
            return setFilter(project);
        }
        if (category === 'javascript') {
            return setFilter(project.filter(project => project.type === 'javascript'));
        }
        if (category === 'react') {
            return setFilter(project.filter(project => project.type === 'react'));
        }
    }, [category, project])
    return (
        <Container>
            <h1 style={{color: 'white'}}>Blogs</h1>
                <div className="newline"></div>
                <div className="category d-flex justify-content-end">
                <button onClick={() => setCategory('all')}>All</button>
                <button onClick={() => setCategory('javascript')}>JavaScript</button>
                <button onClick={() => setCategory('react')}>React</button>
            </div>
            <div className="row">
                {filter.map(blog => <SingleBlog key={blog.id} blog={blog}></SingleBlog>)}
            </div>
        </Container>
    );
};

export default Blogs;