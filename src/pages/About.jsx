import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

import {Flex} from '../components/shared/containers';
import {Title, Summary, List, ListItem, ListText } from '../components/shared/Typography';
import PhotoMe from '../asset/PhotoMe.png';
import Close from '../asset/Close.svg'

const ModalContainer = styled.div `
    right: 0;
    top: 0;
    width: 45vw;
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

const Back = styled.img `
    width: 20px;
    `

const About = () => {
    return (
        <ModalContainer>
            <Flex justifyContent='space-between' alignItems='center'>
                <Title fontSize='18px' color='#000'>About</Title>
                <Link to="/"><Back src={Close} /></Link>
            </Flex>
            <Image src={PhotoMe} />
            <Summary color='#000'>I'm Joy van der Veeken, a multi-disciplinary creative living in London until I get deported back from whence I came due to the United Kingdom leaving the European Union.</Summary>
            <Summary color='#000'>No one likes extended summaries of one's life, so here's several true facts about me.</Summary>
            <List textAlign='center'>
                <ListItem>
                    <ListText fontFamily='PlayFair Display'>No 1 - My name appears in every single English dictionary</ListText>
                    <ListText fontFamily='Lato'>Joy • /dʒɔɪ/ noun • a feeling of great pleasure and happiness</ListText>
                </ListItem>

                <ListItem>
                    <ListText fontFamily='PlayFair Display'>No 2 - I cook a banging paella</ListText>
                </ListItem>

                <ListItem>
                    <ListText fontFamily='PlayFair Display'>No 3 - My girlfriend and I adopted a koi plakat siamese fighting fish</ListText>
                    <ListText fontFamily='Lato'>He is known as Char, the Red Comet</ListText>
                </ListItem>

                <ListItem>
                    <ListText fontFamily='PlayFair Display'>No 4 - I try to travel to a new place once a year</ListText>
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

export default About