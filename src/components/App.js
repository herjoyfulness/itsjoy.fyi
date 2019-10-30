import React from 'react';
// import styled from 'styled-components';
import Navigation from './Navigation';
import Hero from './Hero';
import {Background, HeroWrap} from './Background';

function App() {
  return (
    <Background>
      <HeroWrap>
        <Navigation />
        <Hero />
      </HeroWrap>
    </Background>
  );
}

export default App;
