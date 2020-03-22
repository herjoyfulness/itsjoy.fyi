import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Flex } from './shared/containers';
import {
    H2, Link
} from './shared/Typography';

const MarkdownLink = (props) => {
    return (
        props.href.match(/^(https?:)?\/\//)
        ? <a href={props.href}>{props.children}</a>
        : <Link to={props.href}>{props.children}</Link>
    );
}

const HomeProject = ({projectText}) => {

    return (
        <Flex flexWrap='no-wrap' flexDirection='column' alignItems='center' justifyItems='center' >
             <Flex height='100vh'>
                <Flex height='40vh' width={{ default: '60vw', l: '40vw' }} alignItems='center' margin='auto' >
                    <H2 fontSize={{ default: '1.2em', m: '1.4em', l: '1.8em' }} color='#fff' textAlign='left'>
                        <ReactMarkdown 
                            source={projectText}
                            escapeHtml={false}
                            renderers={{
                                link: MarkdownLink
                            }}
                        />
                    </H2>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default HomeProject