import React from 'react';
import { Link } from 'react-router-dom';
import {
    Flex,
    Box,
    ModalContainer,
    Image
} from '../components/shared/containers';
import {
    H1,
    H3,
    A,
    P,
    List,
} from '../components/shared/Typography';
import Close from '../asset/Close.svg';

const Project = ({ title, source, heroImage, heroCopy, bodyCopy, photos, projectTools }) => {

    let external
    if (source !== undefined) {
        external = <A href={source}>{title}</A>
    } else {
        external = null
    }

    let photo
    if (photos !== undefined) {
        photo = photos.map((photo, i) => <Image width='100%' src={photo} key={i} />)
    }

    return (
        <ModalContainer width='100%' overflowY='hidden'>
            <Flex margin='auto' padding={{ default: '1.5em', m: '5em' }} flexDirection='column' alignItems='center' overflowY='hidden'>

                <Flex width={{ default: '18em', s: '20em', m: '40em', l: '48em' }} justifyContent='space-between' alignItems='center'>
                    <H1 color='#000' fontSize={{ default: '1.2em', m: '1.2em' }}>{title}</H1>
                    <Link to="/"><Image width='1em' src={Close} /></Link>
                </Flex>

                <Image width={{ default: '32em', s: '32em', m: '60em', l: '72em' }} src={heroImage} />

                <Box width={{ default: '18em', s: '20em', m: '40em', l: '48em' }} padding={{ default: '1em', m: '0' }} alignItems='center'>
                    <H3 color='#000'>{heroCopy}</H3>
                    {bodyCopy.map((p, i) => <P margin='1em 0' textAlign='justify' key={i}>{p}</P>)}
                    <List flexDirection='row' flexWrap='wrap'>
                        <h3>Tools</h3>
                        {projectTools.map((t, i) => <li key={i}>{t}</li>)}
                    </List>
                    {photo}
                    {external}
                </Box>
            </Flex>
        </ModalContainer >
    )
}

export default Project