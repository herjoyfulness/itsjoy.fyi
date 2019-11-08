import React from 'react';
import { Link } from 'react-router-dom'

import {
    Flex,
    Box,
    ProjectContainer,
    Image,
    Display
} from '../components/shared/containers';
import {
    H1,
    H2,
    H3,
    P,
    List,
    A
} from '../components/shared/Typography';
import PhotoMe from '../asset/PhotoMe.png';
import Close from '../asset/Close.svg'
import ABCHead from '../asset/abc/abc_header.png'


const ABC = () => {
    return (
        <ProjectContainer>
            <Flex margin='auto' padding='76px 0' width='1200px' flexDirection='column' alignItems='center'>

                <Flex width='48em' justifyContent='space-between' alignItems='center'>
                    <H1 fontFamily='Lato' color='#000'>Alexandra Bradley Consulting</H1>
                    <Link to="/"><Image width='20px' src={Close} /></Link>
                </Flex>

                <Display width='1200px' src={ABCHead} />

                <Box width='48em'>
                    <H3 color='#000'>Alexandra Bradley is an Early Years Education specalist based in London with a decade of experience teaching in some of the most prestigious educational establishments in the Central London area. Known for her honest and supportive mentoring role to parents and with her ethos of "happiness, safety and wellbeing of the child is paramount" she is perfectly placed to guide and help you navigate your child's early years.</H3>
                    <P fontFamily='Lato' margin='16px 0'>To enhance the digital presence for her brand, <A>Alexandra Bradley Consulting</A>, she requested a simple and accessible website.</P>
                    <P fontFamily='Lato' margin='16px 0'>This is where I insert more properly written copy.</P>
                </Box>

                <Flex flexDirection='column'>
                    <List>
                        <h3>Tools</h3>
                        <li>HTML & CSS</li>
                        <li>JavaScript</li>
                        <li>Figma</li>
                        <li>Github</li>
                    </List>
                </Flex>
            </Flex>

        </ProjectContainer >
    )
}

const DEF = () => {
    return (
        <ProjectContainer >
            <Box margin='auto' padding='76px 116px' width='1024px'>
                <Flex justifyContent='space-between' alignItems='center'>
                    <H2 fontFamily='Lato' fontSize='18px' color='#000'>Dread Eagle Fox</H2>
                    <Link to="/"><Image width='20px' src={Close} /></Link>
                </Flex>

                <Image width='100%' src={PhotoMe} />

                <H3 color='#000'>Kitty power jump up to edge of bath, fall in then scramble in a mad panic to get out for curl up and sleep on the freshly laundered towels or eat from dog's food so soft kitty warm kitty little ball of furr so claw at curtains stretch and yawn nibble on tuna ignore human bite human hand. Walk on car leaving trail of paw prints on hood and windshield swat turds around the house. Is good you understand your place in my world. Stare at ceiling. Immediately regret falling into bathtub is good you understand your place in my world for ears back wide eyed poop on couch.</H3>
                <P fontFamily='Lato'>Tuxedo cats always looking dapper poop on couch kitty pounce, trip, faceplant you didn't see that no you didn't definitely didn't lick, lick, lick, and preen away the embarrassment making bread on the bathrobe. Demand to have some of whatever the human is cooking, then sniff the offering and walk away claws in the eye of the beholder chase laser chase mice skid on floor, crash into wall yet leave fur on owners clothes. Massacre a bird in the living room and then look like the cutest and most innocent animal on the planet sit on human they not getting up ever yet cat snacks. Hack up furballs bring your owner a dead bird run in circles, mice or wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again murder hooman toes. Kitten is playing with dead mouse sleep nap at four in the morning wake up owner meeeeeeooww scratch at legs and beg for food then cry and yowl until they wake up at two pm jump on window and sleep while observing the bootyful cat next door that u really like but who already has a boyfriend end up making babies with her and let her move in. Check cat door for ambush 10 times before coming in enslave the hooman or loved it, hated it, loved it, hated it and sleep on dog bed, force dog to sleep on floor kitty poochy cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers.</P>
            </Box>

        </ProjectContainer>
    )
}

export { ABC, DEF }