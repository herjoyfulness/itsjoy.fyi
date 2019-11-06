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
    Box,
} from '../components/shared/Containers';
import About from './About';
import Resume from './Resume';
import {ABC, DEF} from './Projects'
import { 
    ProjectOne,
    ProjectTwo,
    ProjectThree,
    ProjectFour 
} from '../components/ProjectsHome'
import displayOne from '../asset/project1.png'
import displayTwo from '../asset/project2.jpg'
import displayThree from '../asset/project3.jpg'
import displayFour from '../asset/project4.jpg'

const Home = () => {
  return (
    <Switch>
      <Route>
        <Background position='fixed' zIndex='-1' top='0'/>
        <Box>

          <Navigation/>

          <Flex width='100%' height='54.8vh'>
            <Hero />
          </Flex>

          <Flex height='50vh' background='#444' zIndex='999' margin='auto' bg={displayOne}>
            <ProjectOne />
            
          </Flex>
          <Flex height='50vh' background='#333' zIndex='999' margin='auto' bg={displayTwo}>
            <ProjectTwo />
          </Flex>

          <Flex height='50vh' background='#444' zIndex='999' margin='auto' bg={displayThree}>
            <ProjectThree />
          </Flex>
          <Flex height='50vh' background='#333' zIndex='999' margin='auto' bg={displayFour}>
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