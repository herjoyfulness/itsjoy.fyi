import React from 'react';
import { Flex } from './containers';
import { Link } from './Typography';

const Navigation = ({ setBodyLock }) => {

	return (
		<Flex noclick width='100vw' height='100vh' position={{ default: 'fixed', s: 'sticky' }} top='0' zIndex='1' justifyContent='space-between' alignItems={{ default: 'flex-end', s: 'flex-start' }} margin='auto' padding='3em' >

			<Link nav='true' onClick={() => setBodyLock(true)} to="/resume" fontSize={{ default: '1em', s: '1.2em' }} color='#fff' border='none' >Resume</Link>

			<Link nav='true' onClick={() => setBodyLock(true)} to="/about" fontSize={{ default: '1em', s: '1.2em' }} color='#fff' border='none'>About</Link>

		</Flex>
	)
}

export default Navigation