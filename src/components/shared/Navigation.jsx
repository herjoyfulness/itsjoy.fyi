import React from 'react';
import {
	Flex
} from './containers';
import { Button } from './Typography';

const Navigation = () => {

	return (
		<Flex noclick width='100vw' height='100vh' position={{ default: 'fixed', s: 'sticky' }} top='-44%' zIndex='1' justifyContent='space-between' alignItems={{ default: 'flex-end', s: 'center' }} margin='auto' padding='1.5em' >

			<Button to="/resume" fontSize={{ default: '1em', s: '1.2em' }} color={{ default: '#000', s: '#fff' }} bg={{ default: '#fff', s: '#000' }} >Resume</Button>

			<Button to="/about" fontSize={{ default: '1em', s: '1.2em' }} color={{ default: '#000', s: '#fff' }} bg={{ default: '#fff', s: '#000' }} >About</Button>

		</Flex>
	)
}

export default Navigation

