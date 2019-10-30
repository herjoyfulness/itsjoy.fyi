// import React from 'react';
import styled from 'styled-components';
import BackgroundImg from './bg.jpg';

const Background = styled.div `
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url(${BackgroundImg});
  background-size: cover;
`

const HeroWrap = styled.div `
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;  
`

export {Background, HeroWrap}