import React from 'react';
import SVG from 'react-inlinesvg';
import { Flex } from './shared/containers';
import {
    H2,
    A
} from './shared/Typography';

const Coffee = ({footer}) => {

    return (
        <Flex width={{ default: '60vw', l: '40vw' }} height='100vh' margin='auto'>
            <Flex flexDirection='column' margin='auto' height='40vh' alignItems='center' justifyContent='space-between'>
                <H2 fontSize={{ default: '1.2em', m: '1.4em', l: '1.8em' }} color='#fff' textAlign='justify' >{footer.fields.footerText}</H2>

                <Flex width={{ default: '12em', s: '16em' }} justifyContent='space-between' margin='auto'>

                    {/* {console.log('in component', footer.fields.footerSocial[0])} */}

                    {footer.fields.footerSocial.map((social, i) => 
                    <A icon border='none' 
                        key={i} 
                        title={footer.fields.footerSocial[i].fields.socialIcon.fields.title}
                        href={footer.fields.footerSocial[i].fields.socialLink}>
                            <SVG 
                                src={footer.fields.footerSocial[i].fields.socialIcon.fields.file.url}
                                alt={footer.fields.footerSocial[i].fields.socialIcon.fields.title} 
                                width='35px'
                                height='35px'
                            />
                    </A>
                        
                        )}
                </Flex>

            </Flex>
        </Flex >
    )
}

export default Coffee