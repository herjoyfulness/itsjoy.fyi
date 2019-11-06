import React from 'react';

import {Flex} from './shared/Containers'
import {H1} from './shared/Typography';


const Hero = () => {
    return (
        <Flex width='800px' margin='150px auto 0 auto'>
            <H1 fontFamily='Playfair Display' color='#FFF' fontWeight='300'>Hello, my name is Joy. People say I have a knack for design, code and photography.</H1>
        </Flex>
    )
}

export default Hero