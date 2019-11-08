import React from 'react';

import { Flex } from './shared/containers'
import { H1, Button } from './shared/Typography';


const Hero = () => {
    return (
        <Flex width='800px' height='150px' margin='-40vh auto 0 auto'>
            <H1 fontFamily='Playfair Display' color='#FFF' fontWeight='300'>Hello, my name is Joy. People say I have a knack for design, code and photography.</H1>
        </Flex>
    )
}

export default Hero