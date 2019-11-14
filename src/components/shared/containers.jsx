import styled from 'styled-components';
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
    background-image: url(${BackgroundImg});
    background-size: cover;
    ${position};
    ${zIndex};
`

const Container = styled.div`
    max-width: 78em;
    margin-right:auto;
    margin-left:auto;
`

const Flex = styled.div`
    background-image: url(${props => props.bg});
    background-repeat: no-repeat;
    display: flex;
    position: relative;
    pointer-events: ${props => props.noclick ? 'none' : 'auto'};
    box-sizing: border-box;
    transform: ${props => props.nav ? 'translatey(50%)' : 'none'};
    ${alignContent};
    ${alignItems};
    ${justifyContent};
    ${flexDirection};
    ${flexWrap};
    ${width};
    ${height};
    ${margin};
    ${padding};
    ${position};
    ${top};
    ${left};
    ${background};
    ${backgroundPosition};
    ${backgroundSize};
`

const Box = styled.div`
    position: relative;
    pointer-events: ${props => props.noclick ? 'none' : 'auto'};
    box-sizing: border-box;
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
`

const ModalContainer = styled.div`
    top: 0;
    position: fixed;
    height: 100vh;
    z-index: 2;
    background-color: #FFF;
    box-sizing: border-box;
    overflow-y: auto;
    ::-webkit-scrollbar {
        display: none;
    }
    -webkit-box-shadow: 0 0 .5em .5em rgba(0,0,0,.2);
    -moz-box-shadow: 0 0 5em .5em rgba(0,0,0,.2);
    box-shadow: 0 0 5em .5em rgba(0,0,0,.2);
    ${left}
    ${right}
    ${width}
    ${padding}
`

const Image = styled.img`
    pointer-events: auto;
    ${width}
    ${boxShadow}
    ${margin}
`

export {
    Background,
    Container,
    Flex,
    Box,
    ModalContainer,
    Image
}