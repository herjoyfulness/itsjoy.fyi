import React from 'react';
import styled from 'styled-components';
import {Hello} from './Typography';

const HelloText = styled.div `
    margin: auto;
    width: 800px;
`

function Hero() {
    return (
        <HelloText>
            <Hello>Hello, my name is Joy. People say I have a knack for design, code and photography.</Hello>
        </HelloText>
    )
}

export default Hero