import React from 'react';
import { Link } from 'react-router-dom';
import {
    Flex,
    Box,
    ProjectContainer,
    Image,
    Display
} from '../components/shared/containers';
import {
    H1,
    H3,
    P,
    List,
    A
} from '../components/shared/Typography';
import Close from '../asset/Close.svg';
import ABCHead from '../asset/abc/abc_header.png';


const ABC = () => {
    return (
        <ProjectContainer>
            <Flex margin='auto' padding='76px 0' width='1200px' flexDirection='column' alignItems='center'>

                <Flex width='48em' justifyContent='space-between' alignItems='center'>
                    <H1 fontFamily='Lato' color='#000'>Alexandra Bradley Consulting</H1>
                    <Link to="/"><Image width='20px' src={Close} /></Link>
                </Flex>

                <Display width='1200px' src={ABCHead} />

                <Box width='48em'>
                    <H3 color='#000'>Alexandra Bradley is an Early Years Education specalist based in London with a decade of experience teaching in some of the most prestigious educational establishments in the Central London area. Known for her honest and supportive mentoring role to parents and with her ethos of "happiness, safety and wellbeing of the child is paramount" she is perfectly placed to guide and help you navigate your child's early years.</H3>
                    <P fontFamily='Lato' margin='16px 0'>To enhance the digital presence for her brand, <A>Alexandra Bradley Consulting</A>, she requested a simple and accessible website.</P>
                    <P fontFamily='Lato' margin='16px 0'>This is where I insert more properly written copy.</P>
                </Box>

                <Flex flexDirection='column'>
                    <List>
                        <h3>Tools</h3>
                        <li>HTML & CSS</li>
                        <li>JavaScript</li>
                        <li>Figma</li>
                        <li>Github</li>
                    </List>
                </Flex>

            </Flex>
        </ProjectContainer >
    )
}

export { ABC }