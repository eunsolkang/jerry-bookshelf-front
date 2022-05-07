import React from 'react';
import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom'

const buttonStyle = css`
    border : none;
    border-radius : 8px;
    font-size : .925rem;
    font-weight : bold;
    padding : 0.55rem 1.125rem 0.65rem;
    color : ${({theme})=>theme.colors.text};
    outline : none;
    cursor: pointer;
    background-color : ${({theme})=>theme.colors.primary};
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
            background : ${({theme})=>theme.colors.disabled}; !important;
            cursor: default;
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