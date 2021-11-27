import React from 'react';
import styled from 'styled-components';

const PopupBlock = styled.div<{ books: any, focusBook: number, previousColor: string }>`
    position: absolute;
    transition: width 0.75s, height 0.75s, left 0.75s, top 0.75s;
    z-index: 100;
    width: 100%;
    left: 0;
    height: 100%;
    .close-btn{
        position: absolute;
        right: 20px;
        top: 20px;
        font-size: 1.5rem;
        color: white;
    }
    ${
        props => {
            if ( props.focusBook !== -1 ){
                const color = props.books[props.focusBook].backgroundColor;
                return `
                    background-color: ${color};
                    display: block;
                    left: 0;
                    top: 0;
                    width: 100%;
                    
                `
            }
            else{
                return `
                    background-color: ${props.previousColor};
                    width: 0%;
                    top: 0;
                    left: 0;
                    .close-btn{
                        display: none;
                    }
                `
            }
        }
    }
    top: 0;
`

const Popup = ({books, focusBook, previousColor, onOpenBook}: any) => {
    return (
        <PopupBlock books={books} focusBook={focusBook} previousColor={previousColor}>
            <div className='close-btn' onClick={e => {
                onOpenBook(-1);
            }}>X</div>
        </PopupBlock>
    )
}

export default Popup;