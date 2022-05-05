import React from 'react';
import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom'
import palette from '../../lib/styles/palette'

const buttonStyle = css`
    border : none;
    border-radius : 4px;
    font-size : 1rem;
    font-weight : bold;
    padding : 0.5rem 1rem;
    color : ${palette.black};
    outline : none;
    cursor: pointer;
    background-color : ${palette.primary};
    &:hover{
        background-color : #e5b122;
    }
    ${(props: any) => 
        props.fullWidth &&
        css `
            padding-top : 0.85rem;
            padding-bottom : 0.85rem;
            width: 100%;
            font-size : 0.925rem;
        `
    }
    ${(props: any) => 
        props.disable &&
        css `
            background : ${palette.gray[4]} !important;
            cursor: default;
        `
    }
    ${(props: any) =>
        props.cyan &&
        css `
            background : ${palette.cyan[5]};
            &:hover {
                background : ${palette.cyan[4]}
            }
        `
    }
`
const StyledButton = styled.button`
    ${buttonStyle}
`;
 
const StyledLink = styled(Link)`
    ${buttonStyle}
`;

const Button:React.FC<any> = props => {
    return props.to ? 
        (<StyledLink {...props} className='link-button'/> ):
        (<StyledButton {...props} className='button'/>)
}

export default Button;