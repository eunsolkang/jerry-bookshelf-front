import React from 'react';
import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom'
import { darken, lighten } from 'polished';

const buttonStyle = css`
    border : none;
    outline : none;
    border-radius : 25px;
    font-size : 1rem;
    font-weight : bold;
    text-decoration: none;
    padding-top: 10px;
    padding-bottom: 10px;
    word-break: keep-all;
    white-space:nowrap;
    cursor: pointer;
    color : ${({theme})=>theme.colors.text};
    background-color : ${({theme})=>theme.colors.primary};
    transition: background-color .2s ease-in;
    &:hover{
        background-color : ${({theme})=>darken(0.1, theme.colors.primary)};
    }
    ${(props: any) => 
        props.fullWidth &&
        css `
            padding-top : 10px;
            padding-bottom : 10px;
            width: 100%;
            font-size : 1rem;
        `
    }
    ${(props: any) => 
        props.disable &&
        css `
            background : ${({theme})=>theme.colors.disabled}; !important;
            cursor: default;
        `
    }
    ${(props: any) =>
        props.secondary && 
        css `
            background-color: ${({theme})=>theme.colors.secondary};
            color: ${({theme})=>theme.colors.secondaryText};
            &:hover{   
                background-color : ${({theme})=>darken(0.1, theme.colors.secondary)};
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