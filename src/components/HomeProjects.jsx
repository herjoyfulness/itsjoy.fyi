import React from 'react'
import {
    Flex,
} from './shared/containers'
import {
    H2,
    Break,
    Button
} from './shared/Typography'
import ABCHead from '../asset/abc/abc_header.png'

const ABCHome = () => {
    return (
        <Flex width='100vw' height='50vh' bg={ABCHead} backgroundSize='contain' background='white' backgroundPosition='right 100px center'>
            <Flex width='1024px' margin='auto' justifyContent='flex-start' >

                <Flex flexDirection='column' height='250px' width='400px' justifyContent='space-between' >
                    <H2 fontFamily='Lato' color='#000'>Alexandra Bradley Consulting</H2>
                    <Break color='#000' ml='0' />
                    <H2 fontFamily='Playfair Display' fontWeight='300' fontSize='20px' color='#000'>Helping you navigate your child's early years</H2>
                    <Button to="/abc" color='#000' width='130px' border='2px solid #000'>Project details</Button>
                </Flex>

            </Flex>
        </Flex>
    )
}

const ProjectTwo = () => {
    return (
        <Flex width='100vw' height='50vh' bg={ABCHead} backgroundSize='contain' background='white' backgroundPosition='left 100px center'>
            <Flex width='1024px' margin='auto' justifyContent='flex-end' >

                <Flex flexDirection='column' height='250px' width='400px' justifyContent='space-between' >
                    <H2 fontFamily='Lato' color='#000'>Alexandra Bradley Consulting</H2>
                    <Break color='#000' ml='0' />
                    <H2 fontFamily='Playfair Display' fontWeight='300' fontSize='20px' color='#000'>Helping you navigate your child's early years</H2>
                    <Button to="/abc" color='#000' width='130px' border='2px solid #000'>Project details</Button>
                </Flex>

            </Flex>
        </Flex>
    )
}

const ProjectThree = () => {
    return (
        <Flex width='100vw' height='50vh' bg={ABCHead} backgroundSize='contain' background='white' backgroundPosition='right 100px center'>
            <Flex width='1024px' margin='auto' justifyContent='flex-start' >

                <Flex flexDirection='column' height='250px' width='400px' justifyContent='space-between' >
                    <H2 fontFamily='Lato' color='#000'>Alexandra Bradley Consulting</H2>
                    <Break color='#000' ml='0' />
                    <H2 fontFamily='Playfair Display' fontWeight='300' fontSize='20px' color='#000'>Helping you navigate your child's early years</H2>
                    <Button to="/abc" color='#000' width='130px' border='2px solid #000'>Project details</Button>
                </Flex>

            </Flex>
        </Flex>
    )
}

const ProjectFour = () => {
    return (
        <Flex width='100vw' height='50vh' bg={ABCHead} backgroundSize='contain' background='white' backgroundPosition='left 100px center'>
            <Flex width='1024px' margin='auto' justifyContent='flex-end' >

                <Flex flexDirection='column' height='250px' width='400px' justifyContent='space-between' >
                    <H2 fontFamily='Lato' color='#000'>Alexandra Bradley Consulting</H2>
                    <Break color='#000' ml='0' />
                    <H2 fontFamily='Playfair Display' fontWeight='300' fontSize='20px' color='#000'>Helping you navigate your child's early years</H2>
                    <Button to="/abc" color='#000' width='130px' border='2px solid #000'>Project details</Button>
                </Flex>

            </Flex>
        </Flex>
    )
}

export {
    ABCHome,
    ProjectTwo,
    ProjectThree,
    ProjectFour
}