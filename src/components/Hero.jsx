import React from 'react';
import { Flex } from './shared/containers'
import { H1 } from './shared/Typography';
import { theme } from '../components/shared/theme'

theme.breakpoints.s = theme.breakpoints[0];
theme.breakpoints.m = theme.breakpoints[1];
theme.breakpoints.l = theme.breakpoints[2];

const Hero = () => {
    return (
        <Flex width={{ default: '90vw', s: '724px' }} margin={{ default: '-20px auto auto auto', s: '-40vh auto auto auto' }} justifyItems='center'>

            <H1 fontFamily='Playfair Display' color='#FFF' fontWeight='300' fontSize={{ default: '20px', m: '24px' }} lineHeight={{ default: '24px', m: '36px' }}>Hello, my name is Joy. People say I have a knack for pixels and code.</H1>

        </Flex>
    )
}

export default Hero