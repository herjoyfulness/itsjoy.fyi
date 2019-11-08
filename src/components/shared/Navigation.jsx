import React from 'react';
import { Link } from 'react-router-dom';

import {
	Box,
	Flex,
	Image
} from './containers';
import { Button } from './Typography';
import Logo from '../../asset/logo.svg';

const Navigation = () => {
	return (
		<Box
			width='100vw'
			height='55vh'
			position='sticky'
			margin='auto'
			top='20px'
			zIndex='0'
		>

			<Flex
				width='100%'
				height='100px'
				justifyContent='space-between'
				alignItems='center'
				margin='auto'
				mt='45vh'
			>

				<Button to="/resume" color='#000' bg='#fff' border='2px dashed #fff' >Resume</Button>
				<Link to="/"><Image width='100px' src={Logo} alt="Logo" /></Link>
				<Button to="/about" color='#000' bg='#fff' border='2px dashed #fff' >About</Button>
			</Flex>
		</Box>
	)
}

export default Navigation

