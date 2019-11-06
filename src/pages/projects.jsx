import React from 'react';
import {Link} from 'react-router-dom'

import {
    Flex,
    Box, 
    ProjectContainer, 
    Image
} from '../components/shared/Containers';
import {
    H1,
    H2, 
    H3,
    P,
} from '../components/shared/Typography';
import PhotoMe from '../asset/PhotoMe.png';
import Close from '../asset/Close.svg'

const ABC = () => {
    return (
        <ProjectContainer>
            <Box margin='auto' padding='76px 116px' width='1024px'>

                <Flex justifyContent='space-between' alignItems='center'>
                    <H1 fontFamily='Lato' color='#000'>Alexandra Bradley Consulting</H1>
                    <Link to="/"><Image width='20px' src={Close} /></Link>
                </Flex>

                <H3 color='#000'>Curl up and sleep on the freshly laundered towels massacre a bird in the living room and then look like the cutest and most innocent animal on the planet yet woops poop hanging from butt must get rid run run around house drag poop on floor maybe it comes off woops left brown marks on floor human slave clean lick butt now and i shredded your linens for you attack feet carefully drink from water glass and then spill it everywhere and proceed to lick the puddle. </H3>
                <P fontFamily='Lato'>Eat a plant, kill a hand eat prawns daintily with a claw then lick paws clean wash down prawns with a lap of carnation milk then retire to the warmest spot on the couch to claw at the fabric before taking a catnap, adventure always dead stare with ears cocked prance along on top of the garden fence, annoy the neighbor's dog and make it bark. Hit you unexpectedly cat fur is the new black . Crusty butthole cats are cute jump around on couch, meow constantly until given food, morning beauty routine of licking self. Meoooow chase ball of string yet stare out cat door then go back inside hell is other people. Somehow manage to catch a bird but have no idea what to do next, so play with it until it dies of shock what a cat-ass-trophy!. I is not fat, i is fluffy mouse and hate dog, but stand in front of the computer screen, but being gorgeous with belly side up lick plastic bags. Chew master's slippers inspect anything brought into the house, and attempt to leap between furniture but woefully miscalibrate and bellyflop onto the floor; what's your problem? i meant to do that now i shall wash myself intently yet paw your face to wake you up in the morning, spill litter box, scratch at owner, destroy all furniture, especially couch eat the fat cats food curl up and sleep on the freshly laundered towels. Hate dog why must they do that swat at dog. Dismember a mouse and then regurgitate parts of it on the family room floor meow for food, then when human fills food dish, take a few bites of food and continue meowing but meow to be let out poop on couch and do i like standing on litter cuz i sits when i have spaces, my cat buddies have no litter i live in luxury cat life but i see a bird i stare at it i meow at it i do a wiggle come here birdy. Meow meow, i tell my human 𝕄𝔼𝕆𝕎 for spread kitty litter all over house so cough hairball, eat toilet paper yet meow and walk away. 𝕄𝔼𝕆𝕎. Eats owners hair then claws head loves cheeseburgers. The cat was chasing the mouse hide when guests come over throw down all the stuff in the kitchen shove bum in owner's face like camera lens sleep everywhere, but not in my bed. Hiss at vacuum cleaner scamper meow all night having their mate disturbing sleeping humans. Eat prawns daintily with a claw then lick paws clean wash down prawns with a lap of carnation milk then retire to the warmest spot on the couch to claw at the fabric before taking a catnap. Have my breakfast spaghetti yarn while happily ignoring when being called make meme, make cute face hide at bottom of staircase to trip human. Loves cheeseburgers good morning sunshine.</P>

            </Box>

        </ProjectContainer>
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

export {ABC, DEF}