import styled from 'styled-components';
import {color} from 'styled-system';

const Hello = styled.h1 `
    font-family: Playfair Display;
    font-style: normal;
    font-weight: normal;
    font-size: 27px;
    line-height: 36px;
    text-align: justify;
    color: #FFF;
  
`;

const Link = styled.a `
position: relative;
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 18px;
    text-align: center;
    letter-spacing: -0.015em;
    color: #FFF;
    padding: 8px;

    ::before {
        display: block;
        content: "";
        height: 1px;
        width: 63px;
        border-bottom: 2px dashed #fff;
        position: absolute;
        bottom: 0;
    }

    :hover {
        color: #000;
        background-color: #FFF;
         
    }
`

const LinkTwo = styled.a `
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 18px;
    text-align: center;
    letter-spacing: -0.015em;
    color: #FFF;
    padding: 8px;
    z-index: 1;

    ::before  {
        display: block;
        position: absolute;
        content: "";
        width: 59px;
        height: 4px;
        margin: 9px 0 0 -5px;
        z-index: -1;
        background-color: #F48264;
    }

    :hover {
        background-color: #F48264;
    }
`

const Title = styled.h2 `
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: flex-end;
    letter-spacing: -0.015em;
    ${color};
`
const Summary = styled.h2 `
    font-family: Playfair Display;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    display: flex;
    align-items: flex-end;
    letter-spacing: -0.015em;
    text-align: justify;
    ${color};
`

const Description = styled.h3 `
    font-family: Playfair Display;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
    display: flex;
    align-items: flex-end;
    letter-spacing: -0.015em;
    ${color};
`

const Paragraph = styled.p `
    font-family: Lato;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;
    display: flex;
    align-items: flex-end;
    letter-spacing: -0.015em;
    ${color};
`

export {
    Link,
    LinkTwo,
    Hello,
    Title,
    Summary,
    Description,
    Paragraph
}