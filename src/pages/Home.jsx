import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

import Navigation from '../components/shared/Navigation';
import Hero from '../components/Hero';
import {Background, Container, Flex, Box, HeroWrap} from '../components/shared/containers';
import About from './About';
import Resume from './Resume';
import { theme } from '../components/shared/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Background>
          <Flex width='100%' height='500px' justifyContent='space-between' flexDirection='column' alignItems='center'>
            <Navigation />
            <Hero />
          </Flex>
        </Background>
        <Switch>
          <Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
          </Route>
        </Switch>
      </Router>
      
    </ThemeProvider>
  );
}

export default App;