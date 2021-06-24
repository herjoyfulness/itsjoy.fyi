import React from 'react';
import { Link } from 'react-router-dom';
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
    FactList
} from '../components/shared/Typography';
import PhotoMe from '../asset/PhotoMe.png';
import Close from '../asset/Close.svg'

const About = () => {

    return (
        <ModalContainer right='0' width={{ default: '100%', m: '48em' }} padding={{ default: '1.5em', s: '5em' }}>
            <Flex margin='auto' flexDirection='column' >

                <Flex justifyContent='space-between' alignItems='center'>
                    <H2 fontSize={{ default: '1em', s: '1.2em' }} color='#000'>About</H2>
                    <Link to="/" ><Image width='1em' src={Close} mt='2' /></Link>
                </Flex>

                <Image width='100%' src={PhotoMe} />

                <H3 textAlign='justify' color='#000'>I'm Joy van der Veeken, a multi-disciplinary creative living in London until I get deported back from whence I came due to the United Kingdom leaving the European Union.</H3>
                <H3 textAlign='justify' color='#000'>No one likes extended summaries of one's life, so here are 10 random yet true facts about me.</H3>

                <FactList textAlign='center' mb='1em'>
                    <li>
                        <P fontWeight='400'>I - My name appears in - every single - English dictionary</P>
                        <P ><A href='https://dictionary.cambridge.org/dictionary/english/joy'>Joy</A> • /dʒɔɪ/ noun • a feeling of great pleasure and happiness</P>
                    </li>

                    <li>
                        <P fontWeight='400'>II - I cook a banging paella</P>
                    </li>

                    <li>
                        <P fontWeight='400'>III - My girlfriend and I adopted an eight month old <A href='https://lafeber.com/pet-birds/species/african-grey-parrot/'>African Gray</A> named Loki</P>
                        <P >They're the smartest birds in the world and will outlive us</P>
                    </li>

                    <li>
                        <P fontWeight='400'>IV - I am obsessed with <A href='https://youtu.be/rdZxHfUNmvY?t=48s'>Japanese mecha</A></P>
                    </li>

                    <li>
                        <P fontWeight='400'>V - I was born with two different colours of hair</P>
                        <P >It's called <A href='https://www.glamourmagazine.co.uk/article/mallen-streak-hair-trend'>poliosis</A> or a 'mallen streak'</P>
                    </li>

                    <li>
                        <P fontWeight='400'>VI - I have a tattoo of a cat walking on a string on my ankle</P>
                    </li>

                    <li>
                        <P fontWeight='400'>VII - I wear a <A href='https://www.instagram.com/p/B1B_HUPnFg-'>mechanical watch</A> from the 1920s around my neck</P>
                        <P >An heirloom, which my great-grandmother received as a wedding gift</P>
                    </li>

                    <li>
                        <P fontWeight='400'>VIII - I starred in an opening movie of <A href='https://www.bbc.co.uk/sport/football/17760487'>Euro 2000</A></P>
                    </li>

                    {/* <li>
                        <P fontWeight='400'>VIII - I try to travel to <A href='https://www.instagram.com/p/ByweETLCoJU'>a new place</A> once a year</P>
                        <P>Next on the list is the land of the rising sun</P>
                    </li> */}

                    <li>
                        <P fontWeight='400'>IX - I was born and raised in <A href='https://en.wikipedia.org/wiki/Waalwijk'>Waalwijk</A>, the Netherlands</P>
                    </li>

                    <li>
                        <P fontWeight='400'>X - My most played track is <A href='https://open.spotify.com/track/6fcZNs8sOkLwMK2NPzfVWC'>I'm Not Gonna Teach Your Boyfriend How To Dance With You</A></P>
                        <P>By indie rock band Black Kids</P>
                    </li>

                </FactList>

            </Flex>
        </ModalContainer >
    )
}

export default About
