import React from 'react';
import {
    Flex,
    Box
} from './shared/containers';
import { H1 } from './shared/Typography';

const Hero = ({ heroText }) => {
    return (
        <Flex width='100vw' height='100vh' mt={{ default: '0', s: '-100vh' }} >
            <Box margin='auto' width={{ default: '60vw', l: '40vw' }} flexDirection='column' justifyContent='center'>
                <H1 color='#FFF' fontSize={{ default: '1.2em', s: '2em' }}  >{heroText}</H1>
            </Box>
        </Flex>
    )
}

export default Hero