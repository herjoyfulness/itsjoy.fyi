import React from 'react';
import styled from 'styled-components';
import { Link, LinkTwo } from './Typography'
import Logo from './logo.svg'

const Container = styled.div `
    width: 1000px;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
`

const Image = styled.img `
    height: 100px;
`

function Navigation() {
    return (
        <Container>
            <Link>Resume</Link>
            <Image src={Logo} alt="Logo"/>
            <LinkTwo>About</LinkTwo>
        </Container>
    )
}

export default Navigation

