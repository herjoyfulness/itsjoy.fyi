import React, { useState } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import {
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

  const [bodyLock, setBodyLock] = useState(false);

  if (bodyLock === true) {
    setBodyLock(false)
  }

  return (
    <Switch>
      <Route>
        <Box mobile padding='0' height='100vh' overflow={bodyLock ? 'hidden' : 'auto'}>

          <Navigation setBodyLock={setBodyLock} />

          <Hero {...heroContent} />

          <Content />

          <Route path="/resume">
            <Resume setBodyLock={setBodyLock} />
          </Route>
          <Route path="/about">
            <About setBodyLock={setBodyLock} />
          </Route>
          {projects.map((project, i) => <Route key={i} path={project.path}><Project {...project} /></Route>)}

          <Box height='500vh' mt='-500vh' zIndex='-2' background='linear-gradient(135deg, rgba(254,172,94,1) 0%, rgba(244,130,100,1) 25%, rgba(232,108,137,1) 50%, rgba(192,103,169,1) 75%, rgba(128,109,185,1) 100%)' />

        </Box>
      </Route>
    </Switch>
  );
}

export default Home;