import React from 'react';
import { Link } from 'react-router-dom'

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
    FactList,
    List
} from '../components/shared/Typography';
import Close from '../asset/Close.svg'

const Resume = () => {
    return (
        <ModalContainer left='0' >

            <Flex justifyContent='space-between' alignItems='center'>
                <H2 fontFamily='Lato' fontSize='18px' color='#000'>Resume</H2>
                <Link to="/"><Image width='20px' src={Close} /></Link>
            </Flex>

            <H3 color='#000'>My approach to life and work is influenced by a quote from Douglas Adams’ Life, the Universe and Everything Else: “It is a mistake to think you can solve any major problems just with potatoes.”. I’m a fan of clean and simple design with high attention to detail. My passions range from cooking dishes which people rave about to their colleagues, to the falling leaves during autumn, but lie mainly in technology.</H3>

            <Flex justifyContent='space-between'>
                <List width='33%'>
                    <h3>I write</h3>
                    <li>JavaScript</li>
                    <li>React.js</li>
                    <li>HTML & CSS</li>

                </List>
                <List width='33%'>
                    <h3>I create</h3>
                    <li>Web design</li>
                    <li>UI & UX</li>
                    <li>Logo & branding</li>
                </List>
                <List width='33%'>
                    <h3>I use</h3>
                    <li>Github</li>
                    <li>Figma & Sketch</li>
                    <li>Adobe Creative Suite</li>
                </List>
            </Flex>

            <FactList textAlign='justify'>
                <li>
                    <P fontFamily='PlayFair Display'>I have been a designer and photographer at House of Joy since 2010</P>
                    <P fontFamily='Lato'>For the past 9 years I’ve translated my clients’ visions into effective branding, print, websites and videos using photography as a supportive medium. I started operating under my own brandname as a designer and photographer 4 years after my first freelance job for a jeweler.</P>
                </li>

                <li>
                    <P fontFamily='PlayFair Display'>I was a professional cat cuddler at Dierenopvang Breda in 2019</P>
                </li>

                {/* <li>
                    <P fontFamily='PlayFair Display'>I was a postoffice employee at PostNL from 2016 until 2018</P>
                </li> */}

                <li>
                    <P fontFamily='PlayFair Display'>I was a multimedia designer at MAL Reclame in 2014</P>
                    <P fontFamily='Lato'>Taken on as a short term hire I was tasked to set up online and offline advertisements for existing and newly contracted clients. At this agency I had the pleasure of working on projects for Bang & Olufsen and Van Mossel Automotive.</P>
                </li>

                <li>
                    <P fontFamily='Playfair Display'>I am a BSc in Communication & Multimedia Design and graduated from Avans University of Applied Sciences in 2014</P>
                    <P fontFamily='Lato'>During my bachelor's I majored in Multimedial Design and minored in Visualizing Information. At university I had the pleasure of working on real projects for companies such as Philips, Cinekid and SpinAwards.</P>
                </li>

                <li>
                    <P fontFamily='PlayFair Display'>I wrote my thesis at Insiders in 2013</P>
                    <P fontFamily='Lato'>My partner and I researched and developed a concept to help brands explore the world of online video and how to effectively use it. During my thesis I contributed existing projects as a photographer and videographer in the field of tourism.</P>
                </li>

                <li>
                    <P fontFamily='PlayFair Display'>I was an intern at Ensartech in 2011</P>
                    <P fontFamily='Lato'>During the European Project Semester I lead a multidisciplinary and multicultural team of four doing research for Ensartech, a company which had developed a new technology to process (chemical) waste without leftovers. Other than project management I was tasked with communication, designing the project files and additional research.</P>
                </li>

            </FactList>

            <Flex justifyContent='space-between'>
                <List width='33%'>
                    <h3>I am</h3>
                    <li>Creative</li>
                    <li>Goal Driven</li>
                    <li>Passionate</li>
                    <li>Perfectionist</li>
                    <li>Self-motivated</li>
                </List>
                <List width='33%'>
                    <h3>I like</h3>
                    <li>Autumn & winter</li>
                    <li>Coffee</li>
                    <li>Drawing</li>
                    <li>The sea</li>
                    <li>Skateboarding</li>
                </List>
                <List width='33%'>
                    <h3>I love</h3>
                    <li>Cooking</li>
                    <li>Photography</li>
                    <li>Star Wars</li>
                    <li>Traveling</li>
                    <li>My wife-to-be</li>
                </List>
            </Flex>

        </ModalContainer>
    )
}

export default Resume