import React from 'react';
import { Link } from 'react-router-dom';
import {
    Flex,
    Box,
    ModalContainer,
    Image
} from '../components/shared/containers';
import {
    H2,
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
    }

    let photo
    if (photos !== undefined) {
        photo = photos.map((photo, i) => <Image width='100%' src={photo} key={i} />)
    }

    return (
        <ModalContainer top='0' width='100%' >
            <Flex margin='auto' flexDirection='column' width={{ default: '100%', m: '48em' }} padding={{ default: '1.5em', s: '5em' }} alignItems='center'>

                <Flex width={{ default: '17em', s: '100%' }} justifyContent='space-between' alignItems='center'>
                    <H2 fontSize='1.2em' color='#000'>{title}</H2>
                    <Link to="/"><Image width='1em' src={Close} /></Link>
                </Flex>

                <Image width={{ default: '32em', s: '48em', m: '60em', l: '72em' }} src={heroImage} />

                <Box width={{ default: '17em', s: '100%' }} alignItems='center'>
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