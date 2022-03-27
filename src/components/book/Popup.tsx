import React from 'react';
import styled from 'styled-components';
import 'prismjs/themes/prism.css';

import '@toast-ui/editor/dist/toastui-editor.css';
import { Viewer } from '@toast-ui/react-editor';

import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import { Book } from '../../models/book';

const PopupBlock = styled.div<{ focusBook: Book | null, previousBook: Book | null | undefined }>`
    position: absolute;
    transition: width 0.75s,  margin-left 0.75s ease-in-out, height 0.75s, left 0.75s, top 0.75s;
    z-index: 100;
    width: 100%;
    left: 0;
    top: 0;
    height: 100%;
    .close-btn{
        position: absolute;
        right: 20px;
        top: 20px;
        font-size: 1.5rem;
        color: white;
        cursor: pointer;
    }
    
    .contents-box{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: black;
        
        .book-img{
            margin-right: 2.5rem;
        }
        .book-img img {
            height: 70vh;
        }
        .contents{
            padding: 1.5rem;
           width: 70vh;
            background-color: rgba(255, 255, 255, 0.5);
        }
        @media only screen and (max-width: 768px) {
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            .book-img{
                margin-right: 0rem;
            }
            .book-img img {
                width: 100vw;
                height: auto;
            }
            .contents{
                width: calc(100vw - 3rem);
            }
        }
    }
   
    ${
        props => {
            if ( props.focusBook !== null ){
                const color = props.focusBook.background_color;
                return `
                    background-color: ${color};
                    display: block;
                    width: 100%;
                `
            }
            else{
                return `
                    background-color: ${props.previousBook?.background_color};
                    width: 100%;
                    margin-left:-100%;
                    .close-btn{
                        display: none;
                    }
                `
            }
        }
    }
`
type PopupComponentType = {
    focusBook: Book | null;
    previousBook: Book | null | undefined;
    onCloseBook: () => void
}

const Popup:React.FC<PopupComponentType> = ({focusBook, previousBook, onCloseBook}) => {
    return (
        <PopupBlock focusBook={focusBook} previousBook={previousBook}>
            <div className='contents-box'>
                <div className="book-img">
                    <img src={focusBook?.image_url ?? previousBook?.image_url} alt='book'></img>
                </div>
                <div className="contents">
                { previousBook?.report && <Viewer initialValue={previousBook.report} />}
                </div>
            </div>
            <div className='close-btn' onClick={onCloseBook}>X</div>
        </PopupBlock>
    )
}

export default Popup;