import styled from 'styled-components'
import {
    flexDirection,
    justifyContent,
    alignItems,
    width,
    padding,
    margin,
    height,
    position,
    left,
    right,
    top,
    bottom,
    background,
    zIndex
} from 'styled-system'

import BackgroundImg from '../../asset/bg.jpg';

const Background = styled.div `
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url(${BackgroundImg});
  background-size: cover;
`

const Container = styled.div`
        max-width: 1260px;
        margin-right:auto;
        margin-left:auto;
    `

const Flex = styled.div`
        display: flex;
        ${alignItems};
        ${justifyContent};
        ${flexDirection};
        ${width};
        ${height}
`

const Box = styled.div`
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
        ${zIndex}
`

export {
    Background,
    Container,
    Flex,
    Box
}