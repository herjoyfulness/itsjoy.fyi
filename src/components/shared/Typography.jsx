import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
    color,
    background,
    width,
    fontFamily,
    fontSize,
    fontWeight,
    textAlign,
    lineHeight,
    margin,
    padding,
    flexWrap,
    flexDirection,
    border,
    zIndex,
    position
} from 'styled-system';

const H1 = styled.h1`
    font-size: 1.5em;
    line-height: 2em;
    text-align: justify;
    margin: 0;
    ${fontFamily};
    ${color};
    ${fontWeight};
    ${fontSize};
    ${lineHeight};
    ${margin};
    ${padding};
    ${border};
`

const H2 = styled.h2`
    line-height: 1.5em;
    text-align: justify;
    ${fontFamily}
    ${fontWeight}
    ${fontSize}
    ${color}
    ${background}
    ${padding}
`

const H3 = styled.h3`
    font-family: Playfair Display;
    font-weight: 300;
    font-size: 1em;
    line-height: 1.5em;
    text-align: justify;
    ${color};
    ${textAlign}
`

const P = styled.p`
    font-style: normal;
    font-weight: 300;
    font-size: 1em;
    margin: 0.25em 0;
    ${fontFamily};
    ${color};
    ${margin}
`

const A = styled.a`
    color: #000;
    font-weight: 300;
    font-size: 1em;
    padding-bottom: 0;
    text-decoration: none;
    box-sizing: border-box;
    pointer-events: auto;
    border-bottom: 0.125em solid #F48264;
    :hover{
        font-weight: 300;
        color: #F48264;
    }
    ${fontFamily}
    ${margin}
`

const FactList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    li {
        margin: 0.5em 0;
    };
    ${textAlign}
    ${margin}    
`

const List = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    li{
        display: inline-block;
        font-family: Lato;
        font-weight: 400;
        font-size: 1em;
        font-style: normal;
        line-height: 1.5em;
        margin: 0.5em 1em 0.5em 0;
    }    
    h3{
        font-family: Playfair Display;
        font-weight: 300;
        font-size: 1em;
        line-height: 1.5em;
        margin: 0.5em 1em 0.5em 0;        
    }
    ${width};
    ${margin}
    ${color}
    ${flexWrap}
    ${flexDirection}
`

const Button = styled(Link)`
    position: relative;
    font-family: Lato;
    font-style: normal;
    font-weight: 600;
    font-size: 1em;
    line-height: 1.5em;
    text-align: center;
    padding: .5em;
    text-decoration: none;
    border: 2px solid #000;
    pointer-events: auto;
    :hover {
        color: #000;
        background-color: #FFF;
    }
    ${position}
    ${margin}
    ${color}
    ${width}
    ${border}
    ${background}
    ${zIndex}
    ${fontSize}
`

export {
    H1,
    H2,
    H3,
    P,
    A,
    FactList,
    List,
    Button,
}