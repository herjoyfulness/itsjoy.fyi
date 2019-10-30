import React, {Fragment} from 'react';
// import styled from 'styled-components';
import Navigation from './Navigation';
import Hero from './Hero';
import {Background, HeroWrap} from './Background';
import About from './About'

function App() {
  return (
    <Fragment>
      <Background>
        <HeroWrap>
          <Navigation />
          <Hero />
        </HeroWrap>
      </Background>
      <About />
    </Fragment>
  );
}

export default App;