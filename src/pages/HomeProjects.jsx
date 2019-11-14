import React from 'react'
import { Flex } from '../components/shared/containers'
import { Button } from '../components/shared/Typography'

const HomeProject = ({ path, title, heroImage }) => {
    return (
        <Flex width={{ default: '100vw', m: '50vw' }} height='50vh' bg={heroImage} backgroundSize='cover' >

            <Button to={path} fontFamily='Lato' fontSize={{ default: '1em', s: '1.2em' }} color='#fff' background='#000' padding='.5em' margin='auto'>{title}</Button>

        </Flex>
    )
}

export default HomeProject