import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {
    color,
    width,
    fontFamily,
    fontSize,
    fontWeight,
    textAlign,
    margin,
    flexWrap,
    flexDirection,
    border
} from 'styled-system';

const H1 = styled.h1 `
    font-size: 27px;
    line-height: 36px;
    text-align: justify;
    ${fontFamily}
    ${color}
    ${fontWeight}   
`

const H2 = styled.h2 `
    font-style: normal;
    line-height: 24px;
    ${fontFamily}
    ${fontWeight}
    ${fontSize}
    ${color}
`

const H3 = styled.h3 `
    font-family: Playfair Display;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    ${color};
    ${textAlign}
`

const P = styled.p `
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    margin: 4px 0;
    ${fontFamily};
    ${color};
    ${margin}
`

const A = styled.a `
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

const List = styled.ul `
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

const SkillList = styled.ul `
    width: 33%;
    display: flex;
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
    ${margin}
    ${color}
    ${flexWrap}
    ${flexDirection}
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
    ${color}
    ${width}
    ${border}
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
    H1,
    H2,
    H3,
    P,
    A,
    List,
    SkillList,
    Break,
    Button
    // AboutLink,
}