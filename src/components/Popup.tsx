import React from 'react';
import styled from 'styled-components';
import Prism from 'prismjs';
// 여기 css를 수정해서 코드 하이라이팅 커스텀 가능
import 'prismjs/themes/prism.css';

import '@toast-ui/editor/dist/toastui-editor.css';
import { Viewer } from '@toast-ui/react-editor';

import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

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
    
    .contents-box{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: black;
        .book-img{
            height: 70vh;
            width: 30vh;
        }
        .contents{
            padding: 1.5rem;
            width: 100vh;
            background-color: rgba(255, 255, 255, 0.5);
        }
    }
    ${
        props => {
            if ( props.focusBook !== -1 ){
                const color = props.books[props.focusBook].background_color;
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
                    .contents{
                        display: none;
                    }
                `
            }
        }
    }
    top: 0;
`

const Popup = ({books, focusBook, previousColor, onOpenBook}: any) => {
    console.log(books[focusBook]);
    const test = `# 독서는 나를 배신하지않는다.

    나는 어쩌다 이렇게 책을 많이 읽을 수 있었을까?
    먼저 군대라는 환경이 책을 읽기 너무 좋은 환경이다. 초반에 근무를 들어갔는데 정말 시간이 안 갔다. 거의 10시간정도의 시간인데 우리가 필요한 순간이 아니면 정말 멍을 때려야했다. 그러다가 눈에 들어온게 책이었다. 사실 훈련소에서 책은 몇번 읽었어서 시간이 잘 간다고 생각은 했지만 처음 집어든 파친코는 내게 굉장한 충격을 줬다. 
    사회에서 넷플릭스로 드라마를 보는거랑 다르지않았기 때문이다. 꽤 두꺼운 책이었는데 일주일 정도가 지나니 다 읽어버렸다. 
    
    그때부터였다. 그 때 읽은 소설이 내가 지금까지 책을 계속 읽게 도와줬다. 오늘 읽어본 책은 내가 책을 읽으면서 깨달은 사실들을 한번 정리할 수 있는 책이었다.
    이 책을 읽으면서 내가 가지는 독서에 대한 자세와 내가 생각하는 독서의 이점이 증명받는 기분이었다. 신기했던 부분은 이 저자가 도스토옙스키와 다자이 오사무를 좋아한다는 것이다. 이 전에 다자이의 인간실격, 도스토옙스키의 죄와 벌을 읽어본 나로서는 반가운 이름들이었다. 
    
    "자기계발서는 자연스럽게 읽기가 힘들다." 처음에는 이런 생각들이 있었다. 초반에 읽은 부자아빠와 가난한 아빠를 읽으며 분명 대단한 사람임은 알겠는데, 후반에 갈수록 너무 같은 이야기만 반복해서 점점 지루해졌다. 하지만 이 책은 독서를 좋아하는 저자가 쓴 독서를 권하는 자기계발서 이다보니까 작가의 문장력 덕분에 술술 읽혔다.
    사실 저자가 구체적으로 기술한 책의 이점보다. 이 책이 잘 읽힌다는 사실 자체가 독서가 글을 잘 쓰는 능력을 길러준다는 증거 아닐까?
    
    나머지 작가가 강조한 독서에 대한 내용은 내가 이미 독서를 하면서 생각해봤던 내용들이었다. 책 읽는 근육이라던지, 소설이 주는 시사점이라던지 생각하는 독서가 진정 남는 독서이다 등등 충분히 공감가는 내용들이었다. 
    
    그 중 가장 인상 깊었던 내용은 책을 끝까지 읽지 않아도 된다는 부분이다. 나도 책을 읽다가 많이 포기했었는데 이게 은근히 죄책감이 동반되는 일이었다. 뭔가 끝까지 읽어야지 나에게 많이 남는다고 생각했는데 작가는 자신에게 맞지않는 책을 읽는 것 만큼 시간낭비는 없다고 강조한다.
    
    + 그리고 병행독서도 자연스럽게 시작했는데 이 부분도 역시 책에 나와있는 방법이었다. 자주 애용할 예정이다
    `;

    return (
        <PopupBlock books={books} focusBook={focusBook} previousColor={previousColor}>
           
            <div className='contents-box'>
                <div className="book-img">

                </div>
                <div className="contents">
                <Viewer
                    initialValue={test}
                        />
                </div>
            </div>
            <div className='close-btn' onClick={e => {
                onOpenBook(-1);
            }}>X</div>
        </PopupBlock>
    )
}

export default Popup;