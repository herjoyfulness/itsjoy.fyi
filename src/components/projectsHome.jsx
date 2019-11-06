import React from 'react'

import {
    Flex,
} from './shared/containers'
import {
    H2, 
    Break, 
    Button
} from './shared/Typography'



const ProjectOne = () => {
    return (
        <Flex width='1024px' margin='auto' justifyContent='flex-start' >
            
            <Flex flexDirection='column' height='200px' width='400px' justifyContent='space-between' >
                <H2 fontFamily='Lato' color='#FFF'>Project Title</H2>
                <Break color='#FFF' ml='0'/>
                <H2 fontFamily='Playfair Display' fontWeight='300' fontSize='20px' color='#FFF'>Project Details</H2>
                <Button to ="/abc">Project details</Button>
            </Flex>
            
        </Flex>
    )
}

const ProjectTwo = () => {
    return (
        <Flex width='1024px' margin='auto' justifyContent='flex-end'>
            <Flex flexDirection='column' height='200px' width='400px' justifyContent='space-between'>
                <H2 fontFamily='Lato' color='#FFF'>Project Title</H2>
                <Break color='#FFF' ml='0'/>
                <H2 fontFamily='Playfair Display' fontWeight='300' fontSize='20px' color='#FFF'>Hey look it's another project description!</H2>
                <Button to='/def' >Project details</Button>
            </Flex>
            
        </Flex>
    )
}

const ProjectThree = () => {
    return (
        <Flex width='1024px' margin='auto' justifyContent='flex-start'>
            <Flex flexDirection='column' height='200px' width='400px' justifyContent='space-between'>
                <H2 fontFamily='Lato' color='#FFF'>Project Title number 3</H2>
                <Break color='#FFF' ml='0'/>
                <H2 fontFamily='Playfair Display' fontWeight='300' fontSize='20px' color='#FFF'>All the way to the left</H2>
                <Button to='/three' >Project details</Button>
            </Flex>
            
        </Flex>
    )
}

const ProjectFour = () => {
    return (
        <Flex width='1024px' margin='auto' justifyContent='flex-end'>
            <Flex flexDirection='column' height='200px' width='400px' justifyContent='space-between'>
                <H2 fontFamily='Lato' color='#FFF'>Project Title for four fours</H2>
                <Break color='#FFF' ml='0'/>
                <H2 fontFamily='Playfair Display' fontWeight='300' fontSize='20px' color='#FFF'>Oh shiet another on the right side this is crazy.</H2>
                <Button to='/four' >Project details</Button>
            </Flex>
            
        </Flex>
    )
}

export { 
    ProjectOne, 
    ProjectTwo, 
    ProjectThree, 
    ProjectFour }