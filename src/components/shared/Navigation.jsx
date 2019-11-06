import React from 'react';
import {Link} from 'react-router-dom';

import {
    Flex, 
    Image
} from './Containers';
import { Button } from './Typography';
import Logo from '../../asset/logo.svg';

const Navigation = () => {
    return (
        <Flex width='1024px' height='100px' justifyContent='space-between' alignItems='center' margin='auto' mt='500px' position='sticky' top='20px' zIndex='2'>
            <Button to ="/resume" color='#FFF' border='2px dashed #fff' >Resume</Button>
            <Link to ="/"><Image  width='100px' src={Logo} alt="Logo"/></Link>
            <Button to ="/about" color='#FFF' border='2px dashed #fff' >About</Button>
        </Flex>
    )
}

export default Navigation

