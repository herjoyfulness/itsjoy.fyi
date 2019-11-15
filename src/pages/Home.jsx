import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom'
import {
  Background,
  Box
} from '../components/shared/containers';
import {
  projects,
  heroContent
} from '../asset/content';

import Navigation from '../components/shared/Navigation';
import Hero from '../components/Hero';
import About from './About';
import Resume from './Resume';
import Project from './Projects';
import Content from '../components/Content';

const Home = () => {
  return (
    <Switch>
      <Route>
        <Background position='fixed' backgroundSize='cover' top='0' />
        <Box padding='0'>

          <Navigation />

          <Hero {...heroContent} />

          <Content />

          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          {projects.map((project, i) => <Route key={i} path={project.path}><Project {...project} /></Route>)}

        </Box>
      </Route>
    </Switch>
  );
}

export default Home;