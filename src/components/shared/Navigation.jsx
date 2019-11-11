import React from 'react';
import { Link } from 'react-router-dom';

import {
	Box,
	Flex,
	Image
} from './containers';
import { Button } from './Typography';
import Logo from '../../asset/logo.svg';

import { theme } from '../shared/theme'

theme.breakpoints.s = theme.breakpoints[0];
theme.breakpoints.m = theme.breakpoints[1];
theme.breakpoints.l = theme.breakpoints[2];

// const Navigation = () => {
// 	return (
// 		<Box
// 			width='100vw'
// 			height='55vh'
// 			position='sticky'
// 			margin='auto'
// 			top='20px'
// 			zIndex='0'
// 		>

// 			<Flex
// 				width='100%'
// 				height='100px'
// 				justifyContent='space-between'
// 				alignItems='center'
// 				margin='auto'
// 				mt='45vh'
// 			>

// 				<Button to="/resume" color='#000' bg='#fff' border='2px dashed #fff' >Resume</Button>
// 				<Link to="/"><Image width='100px' src={Logo} alt="Logo" /></Link>
// 				<Button to="/about" color='#000' bg='#fff' border='2px dashed #fff' >About</Button>
// 			</Flex>
// 		</Box>
// 	)
// }

const Navigation = () => {
	return (
		<Box
			width='100vw'
			height={{ s: '55vh' }}
			position='sticky'
			margin='auto'
			// top='20px'
			zIndex='0'
		>

			<Flex
				height='100px'
				justifyContent='space-between'
				alignItems='center'
				margin='auto'
				mt={{ default: '40vh', s: '45vh' }}
				padding={{ default: '20px', s: '0' }}
			>

				<Button to="/resume" color='#000' bg='#fff' border='2px dashed #fff' mt={{ default: '90vh', s: '0' }}>Resume</Button>
				<Link to="/"><Image width='100px' src={Logo} alt="Logo" margin={{ default: '0 auto 20vh auto', s: '0' }} /></Link>
				<Button to="/about" color='#000' bg='#fff' border='2px dashed #fff' mt={{ default: '90vh', s: '0' }}>About</Button>
			</Flex>
		</Box>
	)
}

export default Navigation

