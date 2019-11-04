import React from 'react';
import {Link} from 'react-router-dom';

import {
    Flex, 
    Image
} from './containers';
import { A } from './typography';
import Logo from '../../asset/logo.svg';

const Navigation = () => {
    return (
        <Flex width='1024px' height='100px' justifyContent='space-between' alignItems='center' margin='auto' mt='500px' position='sticky' top='20px' zIndex='2'>
            <A to ="/resume" color='#FFF' >Resume</A>
            <Link to ="/"><Image  width='100px' src={Logo} alt="Logo"/></Link>
            <A to ="/about" color='#FFF' >About</A>
        </Flex>
    )
}

export default Navigation

