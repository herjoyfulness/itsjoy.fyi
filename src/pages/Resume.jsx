import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

import {Flex} from '../components/shared/containers';
import {Title, Summary, List, ListItem, ListText } from '../components/shared/Typography';
import Close from '../asset/Close.svg'

const ModalContainer = styled.div `
    left: 0;
    top: 0;
    width: 45vw;
    position: absolute;
    height: 100vh;
    z-index: 1000;
    background-color: #FFF;
    padding: 76px 116px;
    box-sizing: border-box;
`

const Back = styled.img `
    width: 20px;
    `

const Resume = () => {
    return (
        <ModalContainer>
            <Flex justifyContent='space-between' alignItems='center'>
                <Title fontSize='18px' color='#000'>Resume</Title>
                <Link to="/"><Back src={Close} /></Link>
            </Flex>
            
            <Summary color='#000'>My approach to life and work is influenced by a quote from Douglas Adams’ Life, the Universe and Everything Else: “It is a mistake to think you can solve any major problems just with potatoes.”. I’m a fan of clean and simple design with high attention to detail. My passions range from cooking dishes which people rave about to their colleagues, to the falling leaves during autumn, but lie mainly in technology.</Summary>
            
            <List textAlign='left'>
                <ListItem>
                    <ListText fontFamily='PlayFair Display'>I have been a designer and photographer at House of Joy since 2010</ListText>
                    <ListText fontFamily='Lato'>For the past 9 years I’ve translated my clients’ visions into effective branding, print, websites and videos using photography as a supportive medium. I started operating under my own brandname as a designer and photographer 4 years after my first freelance job for a jeweler.</ListText>
                </ListItem>

                <ListItem>
                    <ListText fontFamily='PlayFair Display'>I was a professional cat cuddler at Dierenopvang Breda in 2019</ListText>
                </ListItem>

                <ListItem>
                    <ListText fontFamily='PlayFair Display'>I was a multimedia designer at MAL Reclame in 2014</ListText>
                    <ListText fontFamily='Lato'>Taken on as a short term hire I was tasked to set up online and offline advertisements for existing and newly contracted clients. At this agency I had the pleasure of working on projects for Bang & Olufsen and Van Mossel Automotive.</ListText>
                </ListItem>

                <ListItem>
                    <ListText fontFamily='PlayFair Display'>I wrote my thesis at Insiders in 2013</ListText>
                    <ListText fontFamily='Lato'>My partner and I researched and developed a concept to help brands explore the world of online video and how to effectively use it. During my thesis I contributed existing projects as a photographer and videographer in the field of tourism.</ListText>
                </ListItem>

                <ListItem>
                    <ListText fontFamily='PlayFair Display'>No 5 - I was born with two different colours of hair</ListText>
                    <ListText fontFamily='Lato'>It's called poliosis or a 'mallen streak'</ListText>
                </ListItem>

                <ListItem>
                    <ListText fontFamily='PlayFair Display'>No 6 - I am obsessed with Japanese mecha</ListText>
                </ListItem>

                <ListItem>
                    <ListText fontFamily='PlayFair Display'>No 7 - I was born and raised in Waalwijk, the Netherlands</ListText>
                    <ListText fontFamily='Lato'>Bonus points if you manage to pronounce it</ListText>
                </ListItem>

            </List>

        </ModalContainer>
    )
}

export default Resume