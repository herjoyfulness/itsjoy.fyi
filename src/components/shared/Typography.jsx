import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {color, fontFamily, fontSize} from 'styled-system';

const Hello = styled.h1 `
    font-family: Playfair Display;
    font-style: normal;
    font-weight: normal;
    font-size: 27px;
    line-height: 36px;
    text-align: justify;
    color: #FFF;  
`;

const LinkStyle = styled(Link) `
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
    border: 2px solid #fff;
    text-decoration: none;

    :hover {
        color: #000;
        background-color: #FFF;         
    }
`

const Title = styled.h2 `
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    ${fontSize}
    line-height: 24px;
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
    line-height: 24px;
    text-align: justify;
    ${color};
`

const Description = styled.h3 `
    font-family: Playfair Display;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    ${color};
`

const Paragraph = styled.p `
    font-family: Lato;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 16px;
    display: flex;
    align-items: flex-end;
    letter-spacing: -0.015em;
    ${color};
`

const List = styled.ul `
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 16px 0;
`

const ListItem = styled.li `
    margin-bottom: 0px;
`

const ListText = styled.p `
    ${fontFamily};
    text-align: center;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 16px;
`

// const AboutLink = styled.a `

//     ::before  {
//         display: block;
//         position: absolute;
//         content: "";
//         width: 40px;
//         height: 4px;
//         margin: 9px 0 0 -5px;
//         z-index: -1;
//         background-color: #F48264;
//     }
// `

export {
    LinkStyle,
    Hello,
    Title,
    Summary,
    Description,
    Paragraph,
    List,
    ListItem,
    ListText,
    // AboutLink,
}