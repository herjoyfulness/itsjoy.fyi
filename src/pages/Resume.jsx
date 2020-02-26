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
    FactList,
    List
} from '../components/shared/Typography';
import Close from '../asset/Close.svg';

const Resume = () => {
    return (
        <ModalContainer left='0' width={{ default: '100%', m: '48em' }} padding={{ default: '1.5em', s: '5em' }}>
            <Flex margin='auto' flexDirection='column' >

                <Flex justifyContent='space-between' alignItems='center'>
                    <H2 fontSize={{ default: '1em', s: '1.2em' }} color='#000'>Resume</H2>
                    <Link to="/" ><Image width='1em' src={Close} mt='2' /></Link>
                </Flex>

                <H3 textAlign='center'>"I create everything digital, clean and minimal" <br />Or so she says.</H3>

                <H3 color='#000'>My approach to life and work is influenced by a quote from Douglas Adams’ Life, the Universe and Everything Else: “It is a mistake to think you can solve any major problems just with potatoes.”. I’m a fan of clean and simple design with high attention to detail. My passions range from cooking dishes which people rave about to their colleagues, to the falling leaves during autumn, but lie mainly in technology.</H3>

                <Flex justifyContent='space-between' flexDirection={{ default: 'column', s: 'row' }}>
                    <List width={{ default: '100%', m: '33%' }} flexDirection={{ default: 'row', s: 'column' }} flexWrap={{ default: 'wrap', s: 'no-wrap' }}>
                        <h3>I write</h3>
                        <li>JavaScript</li>
                        <li>React.js</li>
                        <li>HTML & CSS</li>
                    </List>
                    <List width={{ default: '100%', m: '33%' }} flexDirection={{ default: 'row', s: 'column' }} flexWrap={{ default: 'wrap', s: 'no-wrap' }}>
                        <h3>I create</h3>
                        <li>Web design</li>
                        <li>UI & UX</li>
                        <li>Logo & branding</li>
                    </List>
                    <List width={{ default: '100%', m: '33%' }} flexDirection={{ default: 'row', s: 'column' }} flexWrap={{ default: 'wrap', s: 'no-wrap' }}>
                        <h3>I use</h3>
                        <li>Github</li>
                        <li>Figma & Sketch</li>
                        <li>Adobe Creative Suite</li>
                    </List>
                </Flex>

                <FactList textAlign='justify'>
                    <li>
                        <P fontWeight='400'>I have been a designer and photographer at House of Joy since 2010</P>
                        <P >For the past 9 years I’ve translated my clients’ visions into effective branding, print, websites and videos using photography as a supportive medium. I started operating under my own brandname as a designer and photographer 4 years after my first freelance job for a jeweler.</P>
                    </li>
                    <li>
                        <P fontWeight='400'>I was a professional cat cuddler at Dierenopvang Breda in 2019</P>
                    </li>
                    <li>
                        <P fontWeight='400'>I was a postoffice employee at PostNL from 2016 until 2018</P>
                    </li>
                    <li>
                        <P fontWeight='400'>I was a multimedia designer at MAL Reclame in 2014</P>
                        <P >Taken on as a short term hire I was tasked to set up online and offline advertisements for existing and newly contracted clients. At this agency I had the pleasure of working on projects for Bang & Olufsen and Van Mossel Automotive.</P>
                    </li>
                    <li>
                        <P fontWeight='400'>I am a BSc in Communication & Multimedia Design and graduated from Avans University of Applied Sciences in 2014</P>
                        <P >During my bachelor's I majored in Multimedial Design and minored in Visualizing Information. At university I had the pleasure of working on real projects for companies such as Philips, Cinekid and SpinAwards.</P>
                    </li>
                    <li>
                        <P fontWeight='400'>I wrote my thesis at Insiders in 2013</P>
                        <P >My partner and I researched and developed a concept to help brands explore the world of online video and how to effectively use it. During my thesis I contributed existing projects as a photographer and videographer in the field of tourism.</P>
                    </li>
                    <li>
                        <P fontWeight='400'>I was an intern at Ensartech in 2011</P>
                        <P >During the European Project Semester I lead a multidisciplinary and multicultural team of four doing research for Ensartech, a company which had developed a new technology to process (chemical) waste without leftovers. Other than project management I was tasked with communication, designing the project files and additional research.</P>
                    </li>
                </FactList>

                <Flex justifyContent='space-between' flexDirection={{ default: 'column', s: 'row' }}>
                    <List width={{ default: '100%', m: '33%' }} flexDirection={{ default: 'row', s: 'column' }} flexWrap={{ default: 'wrap', s: 'no-wrap' }}>
                        <h3>I am</h3>
                        <li>Creative</li>
                        <li>Goal Driven</li>
                        <li>Passionate</li>
                        <li>Perfectionist</li>
                        <li>Self-motivated</li>
                    </List>
                    <List width={{ default: '100%', m: '33%' }} flexDirection={{ default: 'row', s: 'column' }} flexWrap={{ default: 'wrap', s: 'no-wrap' }}>
                        <h3>I like</h3>
                        <li>Autumn & winter</li>
                        <li>Coffee</li>
                        <li>Drawing</li>
                        <li>The sea</li>
                        <li>Skateboarding</li>
                    </List>
                    <List width={{ default: '100%', m: '33%' }} flexDirection={{ default: 'row', s: 'column' }} flexWrap={{ default: 'wrap', s: 'no-wrap' }}>
                        <h3>I love</h3>
                        <li>Cooking</li>
                        <li>Photography</li>
                        <li>Star Wars</li>
                        <li>Traveling</li>
                        <li>My wife-to-be</li>
                    </List>
                </Flex>
            </Flex>
        </ModalContainer>
    )
}

export default Resume