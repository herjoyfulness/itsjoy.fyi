import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom'

import Navigation from '../components/shared/Navigation';
import Hero from '../components/Hero';
import {
  Background,
  Flex,
  Box
} from '../components/shared/containers';
import About from './About';
import Resume from './Resume';
import { ABC, DEF } from './Projects'
import {
  ProjectOne,
  ProjectTwo,
  ProjectThree,
  ProjectFour
} from '../components/HomeProjects'

const Home = () => {
  return (
    <Switch>
      <Route>
        <Background position='fixed' backgroundSize='cover' zIndex='-1' top='0' />
        <Box padding='0'>

          <Navigation />

          <Flex width='100%'>
            <Hero />
          </Flex>


          <ProjectOne />

          <ProjectTwo />


          <Flex height='50vh' background='#444' zIndex='5' margin='auto' b>
            <ProjectThree />
          </Flex>

          <Flex height='50vh' background='#333' zIndex='5' margin='auto' >
            <ProjectFour />
          </Flex>

          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/abc">
            <ABC />
          </Route>
          <Route path="/def">
            <DEF />
          </Route>

        </Box>
      </Route>
    </Switch>
  );
}

export default Home;