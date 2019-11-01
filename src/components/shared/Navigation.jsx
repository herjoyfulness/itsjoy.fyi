import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import {Flex} from './containers';
import { LinkStyle } from '../shared/Typography';
import Logo from '../../asset/logo.svg';

const Image = styled.img `
    height: 100px;`

const Navigation = () => {
    return (
        <Flex width='1000px' height='100px' justifyContent='space-between' alignItems='center' margin='auto'>
            <LinkStyle to ="/resume" >Resume</LinkStyle>
            <Link to ="/"><Image src={Logo} alt="Logo"/></Link>
            <LinkStyle to ="/about">About</LinkStyle>
        </Flex>
    )
}

export default Navigation

