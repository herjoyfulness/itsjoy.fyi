import React from 'react';
import {Link} from 'react-router-dom';


import {
    Flex, 
    ModalContainer, 
    Image
} from '../components/shared/Containers';
import {
    H2, 
    H3,
    P,
    A,
    List
} from '../components/shared/Typography';
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

            <H3 textAlign='justify' color='#000'>I'm Joy van der Veeken, a multi-disciplinary creative living in London until I get deported back from whence I came due to the United Kingdom leaving the European Union.</H3>
            <H3 textAlign='justify' color='#000'>No one likes extended summaries of one's life, so here are 10 true facts about me.</H3>

            <List textAlign='center' mb='16px'>
                <li>
                    <P fontFamily='PlayFair Display'>I - My name appears in - every single - English dictionary</P>
                    <P fontFamily='Lato'><A href='https://dictionary.cambridge.org/dictionary/english/joy'>Joy</A> • /dʒɔɪ/ noun • a feeling of great pleasure and happiness</P>
                </li>

                <li>
                    <P fontFamily='PlayFair Display'>II - I cook a banging <A>paella</A></P>
                </li>

                <li>
                    <P fontFamily='PlayFair Display'>III - My girlfriend and I adopted a <A href='https://www.instagram.com/p/B4h05Q_nX3V'>koi plakat siamese fighting fish</A></P>
                    <P fontFamily='Lato'>He is known as Char, the Red Comet</P>
                </li>

                <li>
                    <P fontFamily='PlayFair Display'>IV - I am obsessed with <A href='https://www.youtube.com/watch?v=rdZxHfUNmvY'>Japanese mecha</A></P>
                </li>

                <li>
                    <P fontFamily='PlayFair Display'>V - I was born with two different colours of hair</P>
                    <P fontFamily='Lato'>It's called <A href='https://www.glamourmagazine.co.uk/article/mallen-streak-hair-trend'>poliosis</A> or a 'mallen streak'</P>
                </li>

                <li>
                    <P fontFamily='PlayFair Display'>VI - I try to travel to <A href='https://www.instagram.com/p/ByweETLCoJU'>a new place</A> once a year</P>
                </li>

                <li>
                    <P fontFamily='PlayFair Display'>VII - I was born and raised in <A href='https://en.wikipedia.org/wiki/Waalwijk'>Waalwijk</A>, the Netherlands</P>
                    <P fontFamily='Lato'>Bonus points if you manage to pronounce it</P>
                </li>

                <li>
                    <P fontFamily='PlayFair Display'>VIII - I starred in the opening movie of <A href='https://www.bbc.co.uk/sport/football/17760487'>Euro 2000</A></P>
                </li>

                <li>
                    <P fontFamily='PlayFair Display'>IX - I wear a <A href='https://www.instagram.com/p/B1B_HUPnFg-'>mechanical watch</A> from the 1920s around my neck</P>
                    <P fontFamily='Lato'>My great-grandmother received it as a wedding gift'</P>
                </li>


                <li>
                    <P fontFamily='PlayFair Display'>X - My most played track is <A href='https://open.spotify.com/track/57q1oT76QVjLw7xnuCaAQc'>Dream Machine</A> by Dominik Eulberg</P>
                </li>

            </List>

            <Flex justifyContent='space-between' alignItems='center' flexDirection='column'>
                <H3>You can stalk me on</H3>
                <Flex justifyContent='space-between'>
                    <A fontFamily='Lato' color='#000' margin='8px' mt='0' href='https://github.com/herjoyfulness'>Github</A>
                    <A fontFamily='Lato' color='#000' margin='8px' mt='0' href='https://www.linkedin.com/in/herjoyfulness/'>LinkedIn</A>
                    <A fontFamily='Lato' color='#000' margin='8px' mt='0' href='http://instagram.com/herjoyfulness'>Instagram</A>
                    <A fontFamily='Lato' color='#000' margin='8px' mt='0' href='https://open.spotify.com/user/joyisabellahelena'>Spotify</A>
                </Flex>
            </Flex>

        </ModalContainer>
    )
}

export default About