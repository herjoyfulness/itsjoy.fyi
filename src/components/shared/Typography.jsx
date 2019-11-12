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
    flexWrap,
    flexDirection,
    border
} from 'styled-system';

const H1 = styled.h1`
    font-size: 27px;
    line-height: 36px;
    text-align: justify;
    ${fontFamily}
    ${color}
    ${fontWeight}
    ${fontSize}
    ${lineHeight}

`

const H2 = styled.h2`
    line-height: 24px;
    text-align: justify;
    ${fontFamily}
    ${fontWeight}
    ${fontSize}
    ${color}
`

const H3 = styled.h3`
    font-family: Playfair Display;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    text-align: justify;
    ${color};
    ${textAlign}
`

const P = styled.p`
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    margin: 4px 0;
    ${fontFamily};
    ${color};
    ${margin}
`

const A = styled.a`
    color: #000;
    font-weight: 300;
    font-size: 16px;
    padding-bottom: 0px;
    text-decoration: none;
    box-sizing: border-box;
    border-bottom: 2px solid #F48264;
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
    padding: 0px;
    li {
        margin: 8px 0px;
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
        font-size: 16px;
        font-style: normal;
        line-height: 24px;
        margin: 8px 16px 8px 0;
    }    
    h3{
        font-family: Playfair Display;
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
        margin: 8px 16px 8px 0;        
    }
    ${width};
    ${margin}
    ${color}
    ${flexWrap}
    ${flexDirection}
`

const Break = styled.hr`
    width: 40px;
    height: 2px;
    ${color}
    ${margin}
`

const Button = styled(Link)`
    position: relative;
    font-family: Lato;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    padding: 8px;
    text-decoration: none;
    :hover {
        color: #000;
        background-color: #FFF;         
    }
    ${margin}
    ${color}
    ${width}
    ${border}
    ${background}
`

export {
    H1,
    H2,
    H3,
    P,
    A,
    FactList,
    List,
    Break,
    Button,
}