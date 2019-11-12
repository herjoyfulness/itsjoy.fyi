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
    max-width: 1260px;
    margin-right:auto;
    margin-left:auto;
`

const Flex = styled.div`
    background-image: url(${props => props.bg});
    background-repeat: no-repeat;
    display: flex;
    box-sizing: border-box;
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
`

const Box = styled.div`
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
    -webkit-box-shadow: 0px 0px 24px -48px rgba(0,0,0,.4);
    -moz-box-shadow: 0px 0px 24px -48px rgba(0,0,0,.4);
    box-shadow: 0px 0px 24px -48px rgba(0,0,0,.4);
    ${left}
    ${right}
    ${width}
    ${padding}
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
    z-index: 2;
    ${width}
    ${boxShadow}
    ${margin}    
`

const Display = styled.img`
    margin: auto;
    z-index: 2;
    ${width}
`

export {
    Background,
    Container,
    Flex,
    Box,
    ModalContainer,
    ProjectContainer,
    Image,
    Display
}