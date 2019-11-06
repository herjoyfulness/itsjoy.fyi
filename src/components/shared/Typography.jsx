import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {
    color,
    width,
    fontFamily,
    fontSize,
    fontWeight,
    textAlign,
    margin
} from 'styled-system';

const H1 = styled.h1 `
    font-family: Playfair Display;
    font-style: normal;
    font-weight: normal;
    font-size: 27px;
    line-height: 36px;
    text-align: justify;
    color: #FFF;  
`

const H2 = styled.h2 `
    ${fontFamily}
    ${fontWeight}
    ${fontSize}
    ${color}
    font-style: normal;
    line-height: 24px;
`

const H3 = styled.h3 `
    ${color};
    font-family: Playfair Display;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
`

const P = styled.p `
    ${fontFamily};
    ${color};
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    margin: 4px 0;
`

const A = styled(Link) `
    ${color}
    ${width}
    position: relative;
    font-family: Lato;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 18px;
    text-align: center;
    padding: 8px;
    border: 2px dashed #fff;
    text-decoration: none;
    :hover {
        color: #000;
        background-color: #FFF;         
    }
`

const List = styled.ul `
    ${textAlign}
    ${margin}
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    list-style: none;
    padding: 0px;
    li {
        margin: 8px 0px;
    };
    
`

const SkillList = styled.ul `
    ${margin}
    ${color}
    display: flex;
    flex-wrap: no-wrap;
    flex-direction: column;
    list-style: none;
    padding: 0;
    li{
        display: inline-block;
        font-family: Lato;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        padding: 4px 4px;
        margin: 8px 16px 8px 0;
    }
    h3{
        font-family: Lato;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        padding: 4px 4px;
        margin: 8px 16px 8px 0;        
    }
`

// const SkillList = styled.ul `
//     ${margin}
//     display: flex;
//     flex-wrap: wrap;
//     list-style: none;
//     padding: 0;
//     li{
//         display: inline-block;
//         font-family: Lato;
//         font-size: 16px;
//         line-height: 24px;
//         color: #F48264;
//         border: 2px dashed #F48264;
//         background-color: #fff;
//         padding: 4px 4px;
//         margin: 8px 16px 8px 0;
//     }
// `

const Break = styled.hr `
    width: 40px;
    height: 2px;
    ${color}
    ${margin}
`

const Button = styled(Link) `
    width: 130px;
    padding: 8px;
    font-family: Lato;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: #FFF;
    border: 2px solid #fff;
    text-decoration: none;
    :hover {
        color: #000;
        background-color: #FFF;         
    }
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
    A,
    H1,
    H2,
    H3,
    P,
    List,
    SkillList,
    Break,
    Button
    // AboutLink,
}