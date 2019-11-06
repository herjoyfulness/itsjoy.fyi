import React from 'react';
import {Link} from 'react-router-dom';


import {
    Flex, 
    ModalContainer, 
    Image
} from '../components/shared/containers';
import {
    H2, 
    H3,
    P,
    A,
    List
} from '../components/shared/typography';
import PhotoMe from '../asset/PhotoMe.png';
import Close from '../asset/Close.svg'

const About = () => {
    return (
        <ModalContainer right='0' >

            <Flex justifyContent='space-between' alignItems='center'>
                <H2 fontFamily='Lato' fontSize='18px' color='#000'>About</H2>
                <Link to="/"><Image width='20px' src={Close} /></Link>
            </Flex>

            <Image width='100%' src={PhotoMe} />

            <H3 color='#000'>I'm Joy van der Veeken, a multi-disciplinary creative living in London until I get deported back from whence I came due to the United Kingdom leaving the European Union.</H3>
            <H3 color='#000'>No one likes extended summaries of one's life, so here's several true facts about me.</H3>

            <List textAlign='center' mb='32px'>
                <li>
                    <P fontFamily='PlayFair Display'>No 1 - My name appears in every single English dictionary</P>
                    <P fontFamily='Lato'>Joy • /dʒɔɪ/ noun • a feeling of great pleasure and happiness</P>
                </li>

                <li>
                    <P fontFamily='PlayFair Display'>No 2 - I cook a banging paella</P>
                </li>

                <li>
                    <P fontFamily='PlayFair Display'>No 3 - My girlfriend and I adopted a koi plakat siamese fighting fish</P>
                    <P fontFamily='Lato'>He is known as Char, the Red Comet</P>
                </li>

                <li>
                    <P fontFamily='PlayFair Display'>No 4 - I try to travel to a new place once a year</P>
                </li>

                <li>
                    <P fontFamily='PlayFair Display'>No 5 - I was born with two different colours of hair</P>
                    <P fontFamily='Lato'>It's called poliosis or a 'mallen streak'</P>
                </li>

                <li>
                    <P fontFamily='PlayFair Display'>No 6 - I am obsessed with Japanese mecha</P>
                </li>

                <li>
                    <P fontFamily='PlayFair Display'>No 7 - I was born and raised in Waalwijk, the Netherlands</P>
                    <P fontFamily='Lato'>Bonus points if you manage to pronounce it</P>
                </li>

            </List>

            <Flex width='100%' justifyContent='space-between'>
                <A color='#000' to='https://github.com/herjoyfulness'>Github</A>
                <A color='#000' to='https://www.linkedin.com/in/herjoyfulness/'>LinkedIn</A>
                <A color='#000' to='http://instagram.com/herjoyfulness'>Instagram</A>
                <A color='#000'>Spotify</A>
            </Flex>

        </ModalContainer>
    )
}

export default About