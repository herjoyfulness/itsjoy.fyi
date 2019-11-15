import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
    color,
    background,
    width,
    fontStyle,
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
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 600;
    font-size: 3em;
    line-height: 1.5em;
    margin: 0;
    ${color};
    ${fontWeight};
    ${fontSize};
    ${lineHeight};
    ${margin};
    ${padding};
    ${border};
`

const H2 = styled.h2`
    font-family: 'Source Sans Pro', sans-serif;
    line-height: 1.5em;
    text-align: left;
    ${fontWeight};
    ${fontSize};
    ${color};
    ${background};
    ${padding};
`

const H3 = styled.h3`
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
    font-size: 1em;
    line-height: 1.5em;
    text-align: justify;
    ${fontWeight};
    ${color};
    ${textAlign};
`

const P = styled.p`
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 300;
    font-size: 1em;
    margin: 0.25em 0;
    ${fontStyle};
    ${fontWeight};
    ${color};
    ${margin};
    ${textAlign};
`

const A = styled.a`
    font-family: 'Source Sans Pro', sans-serif;
    color: #000;
    font-weight: 400;
    font-size: 1em;
    padding-bottom: 0;
    text-decoration: none;
    box-sizing: border-box;
    pointer-events: auto;
    fill: #FFF;
    border-bottom: 0.125em solid #F48264;
    :hover{
        color: #FFF;
        background: ${props => props.icon ? 'none' : '#F48264'};
        fill: #000;
    }
    ${margin};
    ${color};
    ${fontWeight};
    ${border};
    ${textAlign};
`

const FactList = styled.ul`
    font-family: 'Source Sans Pro', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    li {
        margin: 0.5em 0;
    };
    ${textAlign};
    ${margin};
`

const List = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    li{
        display: inline-block;
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 300;
        font-size: 1em;
        font-style: normal;
        line-height: 1.5em;
        margin: 0.5em 1em 0.5em 0;
    }    
    h3{
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 400;
        font-size: 1em;
        line-height: 1.5em;
        margin: 0.5em 1em 0.5em 0;        
    }
    ${width};
    ${margin};
    ${color};
    ${flexWrap};
    ${flexDirection};
`

const AHome = styled(Link)`
    font-family: 'Source Sans Pro', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 1em;
    line-height: 1.5em;
    text-align: center;
    padding: ${props => props.nav ? '.5em' : '0'};
    text-decoration: none;
    pointer-events: auto;
    color: #FFF;
    border-bottom: .1em solid #FFF;
    :hover {
        color: #000;
        background-color: #FFF;
    }
    ${position};
    ${margin};
    ${color};
    ${width};
    ${border};
    ${background};
    ${zIndex};
    ${fontSize};
    ${padding};
`

export {
    H1,
    H2,
    H3,
    P,
    A,
    FactList,
    List,
    AHome as Link
}