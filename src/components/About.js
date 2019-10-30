import React from 'react';
import {Title, Description} from './Typography'
import styled from 'styled-components';
import PhotoMe from './PhotoMe.png'

const ModalContainer = styled.div `
    right: 0;
    top: 0;
    width: 50vw;
    position: absolute;
    height: 100vh;
    z-index: 1000;
    background-color: #FFF;
    padding: 76px 116px;
    box-sizing: border-box;
`

const Image = styled.img `
    width: 100%;
`

const About = () => {
    return (
        <ModalContainer>
            <Title color='#000'>About</Title>
            
            <Image src={PhotoMe} />

            <Description color='#000'>I'm Joy van der Veeken, a multi-disciplinary creative living in London until I get deported back from whence I came due to the United Kingdom leaving the European Union.</Description>
            <Description color='#000'>No one likes extended summaries of one's life, so here's several true facts about me.</Description>

        </ModalContainer>
    )
}

export default About