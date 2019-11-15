import React from 'react'
import { Flex } from './shared/containers'
import {
    H2,
    Link
} from './shared/Typography'
import Coffee from './Coffee';
import Joy from '../asset/houseofjoy/logo.svg';
import ABC from '../asset/abc/abclogo.svg';

const HomeProject = () => {

    return (
        <Flex flexWrap='no-wrap' flexDirection='column' alignItems='center' justifyItems='center' >
            <Flex width='100vw' height='100vh'>
                <Flex height='40vh' width={{ default: '60vw', l: '40vw' }} alignItems='center' margin='auto' bg={Joy}>
                    <H2 fontSize={{ default: '1.2em', m: '1.4em', l: '1.8em' }} color='#fff' textAlign='left' >
                        I designed <Link to='/houseofjoy'>a new portfolio</Link> using my new-found React.js knowledge.
                    </H2>


                </Flex>
            </Flex>

            <Flex width='100vw' height='100vh'>
                <Flex height='30vh' width={{ default: '60vw', l: '40vw' }} alignItems='center' margin='auto' bg={ABC}>
                    <H2 fontSize={{ default: '1.2em', m: '1.4em', l: '1.8em' }} color='#fff' textAlign='left'>
                        I recently created <Link to='/abc'>a website</Link> for Alexandra Bradley, a London based consultant for children.
                    </H2>


                </Flex>
            </Flex>

            <Flex width='100vw' height='100vh'>
                <Flex height='40vh' width={{ default: '60vw', l: '40vw' }} alignItems='center' margin='auto' >
                    <H2 fontSize={{ default: '1.2em', m: '1.4em', l: '1.8em' }} color='#fff' textAlign='left'>
                        <Link to='/photography'>Photography</Link> is sort of my second love, I try to drag my camera with me wherever I go.
                    </H2>
                </Flex>
            </Flex>

            {/* <Flex width='100vw' height='100vh'>
                <Flex height='40vh' width={{ default: '60vw', l: '40vw' }} alignItems='center' margin='auto' bg={Photo}>
                    <H2 fontSize={{ default: '1.2em', m: '1.4em', l: '1.8em' }} color='#fff' textAlign='left'>
                        A bunch of posters I made were displayed at <Link>a conference in Miami</Link>.
                    </H2>
                </Flex>
            </Flex> */}

            {/* <Flex width='100vw' height='100vh'>
                <Flex height='40vh' width={{ default: '60vw', l: '40vw' }} alignItems='center' margin='auto' bg={Photo}>
                    <H2 fontSize={{ default: '1.2em', m: '1.4em', l: '1.8em' }} color='#fff' textAlign='left'>
                        I created a logo for <Link>a cloudcast project</Link> which never got realized.
                    </H2>
                </Flex>
            </Flex> */}

            <Coffee />

        </Flex>
    )
}

export default HomeProject