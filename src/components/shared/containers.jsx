import styled from 'styled-components'
import {
    display,
    flexDirection,
    justifyContent,
    flexWrap,
    alignItems,
    alignContent,
    width,
    maxWidth,
    padding,
    margin,
    height,
    position,
    left,
    right,
    top,
    bottom,
    background,
    backgroundPosition,
    backgroundSize,
    zIndex,
    boxShadow
} from 'styled-system'

import BackgroundImg from '../../asset/4.jpg';

const Background = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    ${position};
    background-image: url(${BackgroundImg});
    background-size: cover;
    ${zIndex};
`

const Container = styled.div`
    max-width: 1260px;
    margin-right:auto;
    margin-left:auto;
`

const Flex = styled.div`
    ${alignContent}
    ${alignItems};
    ${justifyContent};
    ${flexDirection};
    ${flexWrap};
    ${width};
    ${maxWidth}
    ${height};
    ${margin};
    ${padding};
    ${position};
    ${top};
    ${left};
    ${background};
    ${backgroundPosition};
    ${backgroundSize};
    background-image: url(${props => props.bg});
    background-repeat: no-repeat;
    display: flex;
    box-sizing: border-box;
`

const Box = styled.div`
    ${display}
    ${alignItems};
    ${justifyContent};
    ${flexDirection};
    ${width};
    ${padding};
    ${margin};
    ${height}
    ${position};
    ${left};
    ${right};
    ${top};
    ${bottom};
    ${background};
    ${zIndex};
    box-sizing: border-box;
`

const ModalContainer = styled.div`
    ${left}
    ${right}
    top: 0;
    position: fixed;
    width: 768px;
    height: 100vh;
    z-index: 2;
    background-color: #FFF;
    padding: 76px 116px;
    box-sizing: border-box;
    overflow-y: auto;
    ::-webkit-scrollbar {
        display: none;
    }
    -webkit-box-shadow: 0px 0px 24px -48px rgba(0,0,0,.4);
    -moz-box-shadow: 0px 0px 24px -48px rgba(0,0,0,.4);
    box-shadow: 0px 0px 24px -48px rgba(0,0,0,.4);
`

const ProjectContainer = styled.div`
    top: 0;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: #FFF;
    z-index: 3;
    overflow-y: auto;
`

const Image = styled.img`
    ${width}
    ${boxShadow}
    z-index: 2;
`

const Display = styled.img`
    ${width}
    margin: auto;
    z-index: 2;
`

const Snap = styled(Box)`
    scroll-snap-type: y mandatory;
`


export {
    Background,
    Container,
    Flex,
    Box,
    ModalContainer,
    ProjectContainer,
    Image,
    Display,
    Snap
}