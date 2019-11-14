import React from 'react';
import {
    Flex,
} from './shared/containers'
import { H1 } from './shared/Typography';

const Hero = ({ heroText }) => {
    return (
        <Flex width='100vw' height='100vh' mt={{ default: '0', s: '-100vh' }} >
            <Flex margin='auto' padding='1.5em' flexDirection='column'>
                <H1 fontFamily='Lato' color='#FFF' bg='#000' padding='.5em' fontWeight='600' lineHeight='1.5em' fontSize={{ default: '1em', s: '1.2em' }} border='2px solid #000'>{heroText}</H1>
            </Flex>
        </Flex>
    )
}



export default Hero