import React from 'react';
import styled from 'styled-components';
import Prism from 'prismjs';
// 여기 css를 수정해서 코드 하이라이팅 커스텀 가능
import 'prismjs/themes/prism.css';

import '@toast-ui/editor/dist/toastui-editor.css';
import { Viewer } from '@toast-ui/react-editor';

import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import { Book } from '../models/book';

const PopupBlock = styled.div<{ focusBook: Book, previousColor: string }>`
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
            //width: 30vh;
        }
        .contents{
            padding: 1.5rem;
            width: 100vh;
            background-color: rgba(255, 255, 255, 0.5);
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
                    background-color: ${props.previousColor};
                    width: 100%;
                    margin-left:-100%;
                    .close-btn{
                        display: none;
                    }
                `
            }
        }
    }
    top: 0;
`

const Popup = ({focusBook, previousColor, onCloseBook}: any) => {
    const reportMarkdown = focusBook?.report || `# 아직 독후감이 없습니다!`

    return (
        <PopupBlock focusBook={focusBook} previousColor={previousColor}>
            <div className='contents-box'>
                <div className="book-img">
                    <img src={focusBook?.image_url ?? ''}></img>
                </div>
                <div className="contents">
                <Viewer initialValue={reportMarkdown}/>
                </div>
            </div>
            <div className='close-btn' onClick={onCloseBook}>X</div>
        </PopupBlock>
    )
}

export default Popup;