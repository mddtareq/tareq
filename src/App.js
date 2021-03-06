import React from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import './App.css';
import AboutMe from './components/AboutMe/AboutMe/AboutMe';
import Blogs from './components/Blogs/Blogs/Blogs';
import BlogsDetail from './components/Blogs/BlogsDetail/BlogsDetail';
import Contact from './components/Contact/Contact/Contact';
import Home from './components/Home/Home/Home';
import ProjectDetail from './components/Projects/ProjectDetail/ProjectDetail';
import Projects from './components/Projects/Projects/Projects';
import Resume from './components/Resume/Resume/Resume';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route  path="/projects">
          <Projects></Projects>
        </Route>
        <Route path="/blogs">
          <Blogs></Blogs>
        </Route>
        <Route path='/about'>
          <AboutMe></AboutMe>
        </Route>
        <Route path="/project/:id">
          <ProjectDetail></ProjectDetail>
        </Route>
        <Route path="/blog/:id">
          <BlogsDetail></BlogsDetail>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="/resume">
          <Resume></Resume>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
