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
import { ABC } from './Projects'
import { theme } from '../components/shared/theme'

theme.breakpoints.s = theme.breakpoints[0];
theme.breakpoints.m = theme.breakpoints[1];
theme.breakpoints.l = theme.breakpoints[2];

const Home = () => {
  return (
    <Switch>
      <Route>
        <Background position='fixed' backgroundSize='cover' zIndex='-1' top='0' />
        <Box padding='0'>

          <Navigation />

          <Flex width='80%' margin='auto'>
            <Hero />
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

        </Box>
      </Route>
    </Switch>
  );
}

export default Home;