import React from 'react';
import './Resume.css'
import { Container } from 'react-bootstrap';

const Resume = () => {
    return (
        <Container>
            <h1 style={{ color: 'white' }}>Resume</h1>
            <div className="newline"></div>
            <div style={{ color: 'white', marginTop: '20px' }} className="row">
                <div className="col-md-8 col-sm-8">
                    <h3 style={{ marginBottom: '20px' }}>Experiences</h3>
                    <div style={{borderLeft:'1px solid white',marginLeft: '20px'}}className="">
                    <div style={{ marginLeft: '20px', marginBottom: '20px' }} className="exp">
                        <div className="red-dot"></div>
                        <h5>Frontend Developer Intern</h5>
                        <h6>Antopolis(Sept 2020-Present)</h6>
                        <p>Front end development, Responsive Design.
                        Complete HTML and CSS from a PSD/XD/FIGMA file.</p>
                    </div>
                    </div>
                    <h3 style={{ marginBottom: '20px' }}>Courses</h3>
                    <div style={{borderLeft:'1px solid white',marginLeft: '20px'}}className="">
                    <div style={{ marginLeft: '20px', marginBottom: '20px' }} className="exp">
                    <div className="red-dot"></div>
                        <h5>Complete Web Development Course</h5>
                        <h6>Programming Hero(June 2020-Oct 2020)</h6>
                        <p>
                            Technology Learned: HTML, CSS, Bootstrap, JavaScript, React, MongoDB,
                            Redux, Firebase, MaterialUI.Work on various projects like Travel Guru, Creative Agency, Volunteer Work,Pin Matcher etc.</p>
                    </div>
                    </div>
                    <h3 style={{ marginBottom: '20px' }}>Education</h3>
                    <div style={{borderLeft:'1px solid white',marginLeft: '20px'}}className="">
                    <div style={{ marginLeft: '20px', marginBottom: '20px' }} className="exp">
                    <div className="red-dot"></div>
                        <h5>Bachelor of Science in Computer Science & Engineering</h5>
                        <h6>American International University-Bangladesh(Jan 2016-Jan 2020)</h6>
                        <h6>Faculty of Science & Technology</h6>
                        <p>3.59/4.00</p>
                    </div>
                    <div style={{ marginLeft: '20px', marginBottom: '20px' }} className="exp">
                    <div className="red-dot"></div>
                        <h5>Higher School Certificate</h5>
                        <h6>Dhaka Imperial College(Aug 2013-Aug 2015)</h6>
                        <h6>Science</h6>
                        <p>5.00/5.00</p>
                    </div>
                    <div style={{ marginLeft: '20px', marginBottom: '20px' }} className="exp">
                        <div className="red-dot"></div>
                        <h5>Secondary School Certificate</h5>
                        <h6>Motijheel Model School and College(Jan 2011-March 2013)</h6>
                        <h6>Science</h6>
                        <p>5.00/5.00</p>
                    </div>
                    </div>
                    
                </div>
                <div style={{ borderLeft: '1px solid white' }} className="skill col-md-4 col-sm-4">
                    <h3>Expertise</h3>
                    <div className="skill-item">
                        <div className="d-flex justify-content-between">
                            <h6>HTML</h6>
                            <h6>95%</h6>
                        </div>
                        <progress style={{ width: '100%' }} value="95" max="100"></progress>
                    </div>
                    <div className="skill-item">
                        <div className="d-flex justify-content-between">
                            <h6>CSS</h6>
                            <h6>90%</h6>
                        </div>
                        <progress style={{ width: '100%' }} value="90" max="100"></progress>
                    </div>
                    <div className="skill-item">
                        <div className="d-flex justify-content-between">
                            <h6>JavaScript</h6>
                            <h6>85%</h6>
                        </div>
                        <progress style={{ width: '100%' }} value="85" max="100"></progress>
                    </div>
                    <div className="skill-item">
                        <div className="d-flex justify-content-between">
                            <h6>React</h6>
                            <h6>80%</h6>
                        </div>
                        <progress style={{ width: '100%' }} value="80" max="100"></progress>
                    </div>
                    <div className="skill-item">
                        <div className="d-flex justify-content-between">
                            <h6>Bootstrap</h6>
                            <h6>90%</h6>
                        </div>
                        <progress style={{ width: '100%' }} value="90" max="100"></progress>
                    </div>
                    <div className="skill-item">
                        <div className="d-flex justify-content-between">
                            <h6>ES6</h6>
                            <h6>85%</h6>
                        </div>
                        <progress style={{ width: '100%' }} value="85" max="100"></progress>
                    </div>
                    <h3 style={{ marginTop: '10px' }}>Comfortable</h3>
                    <div className="skill-item">
                        <div className="d-flex justify-content-between">
                            <h6>JQuery</h6>
                            <h6>80%</h6>
                        </div>
                        <progress style={{ width: '100%' }} value="80" max="100"></progress>
                    </div>
                    <div className="skill-item">
                        <div className="d-flex justify-content-between">
                            <h6>MongoDB</h6>
                            <h6>70%</h6>
                        </div>
                        <progress style={{ width: '100%' }} value="70" max="100"></progress>
                    </div>
                    <div className="skill-item">
                        <div className="d-flex justify-content-between">
                            <h6>C++</h6>
                            <h6>85%</h6>
                        </div>
                        <progress style={{ width: '100%' }} value="85" max="100"></progress>
                    </div>
                    <div className="skill-item">
                        <div className="d-flex justify-content-between">
                            <h6>Firebase</h6>
                            <h6>70%</h6>
                        </div>
                        <progress style={{ width: '100%' }} value="70" max="100"></progress>
                    </div>
                    <div className="skill-item">
                        <div className="d-flex justify-content-between">
                            <h6>Material UI</h6>
                            <h6>75%</h6>
                        </div>
                        <progress style={{ width: '100%' }} value="75" max="100"></progress>
                    </div>
                    <h3 style={{ marginTop: '10px' }}>Familiar</h3>
                    <div className="skill-item">
                        <div className="d-flex justify-content-between">
                            <h6>Angular</h6>
                            <h6>60%</h6>
                        </div>
                        <progress style={{ width: '100%' }} value="60" max="100"></progress>
                    </div>
                    <div className="skill-item">
                        <div className="d-flex justify-content-between">
                            <h6>MySQL</h6>
                            <h6>65%</h6>
                        </div>
                        <progress style={{ width: '100%' }} value="65" max="100"></progress>
                    </div>
                    <div className="skill-item">
                        <div className="d-flex justify-content-between">
                            <h6>PHP</h6>
                            <h6>70%</h6>
                        </div>
                        <progress style={{ width: '100%' }} value="70" max="100"></progress>
                    </div>
                    <div className="skill-item">
                        <div className="d-flex justify-content-between">
                            <h6>Sass</h6>
                            <h6>50%</h6>
                        </div>
                        <progress style={{ width: '100%' }} value="50" max="100"></progress>
                    </div>
                    <div className="skill-item">
                        <div className="d-flex justify-content-between">
                            <h6>Redux</h6>
                            <h6>65%</h6>
                        </div>
                        <progress style={{ width: '100%' }} value="65" max="100"></progress>
                    </div>
                    <h3 style={{ marginTop: '10px' }}>Tools</h3>
                    <div className="skill-item">
                        <div className="d-flex justify-content-between">
                            <h6>VSCode</h6>
                            <h6>80%</h6>
                        </div>
                        <progress style={{ width: '100%' }} value="80" max="100"></progress>
                    </div>
                    <div className="skill-item">
                        <div className="d-flex justify-content-between">
                            <h6>Chrome Dev Tools</h6>
                            <h6>85%</h6>
                        </div>
                        <progress style={{ width: '100%' }} value="85" max="100"></progress>
                    </div>
                    <div className="skill-item">
                        <div className="d-flex justify-content-between">
                            <h6>Git</h6>
                            <h6>80%</h6>
                        </div>
                        <progress style={{ width: '100%' }} value="80" max="100"></progress>
                    </div>
                    <div className="skill-item">
                        <div className="d-flex justify-content-between">
                            <h6>Sublime Text</h6>
                            <h6>80%</h6>
                        </div>
                        <progress style={{ width: '100%' }} value="80" max="100"></progress>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Resume;