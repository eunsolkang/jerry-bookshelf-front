import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const StyledModal = styled.div`
    ${({theme})=>theme.flex.columnCenter};
    z-index: 150;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    .modal{
        min-width: 380px;
        border-radius: 8px;
        z-index: 200;
        padding: 1.5rem;
        padding-top: 1.75rem;
        padding-bottom: 1.75rem;
        background-color: white;
        .modal-header{
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-weight: bold;
            font-size: 1.125rem;
            margin-bottom: 1rem;
            img{
                width: 1.5rem;
                cursor: pointer;
            }
        }
        .modal-main{
            margin-top: .5rem;
            margin-bottom: 1rem;
        }
        .modal-footer{
            display: flex;
            justify-content: flex-end;
            .button + .button{
                margin-left: .5rem;
            }
        }
    }
`

type ModalType = {
    title: string;
    negativeText: string;
    positiveText: string;
    description: string;
    positiveAction?: () => void;
    negativeAction?: () => void;
    onCloseModal: () => void;
}
const Modal:React.FC<ModalType> = ({
    positiveText = '확인',
    negativeText = '취소',
    title = '타이틀 텍스트',
    description = '모달에 대한 설명입니다.',
    positiveAction,  
    negativeAction, 
    onCloseModal,
}) => {
    return (
        <StyledModal>
            <div className='background-cover'>

            </div>
            <div className='modal'>
                <div className='modal-header'>
                    {title}
                    <img src='/icon/ic_close.svg' onClick={onCloseModal}/>
                </div>
                <div className='modal-main'>
                    {description}
                </div>
                <div className='modal-footer'>
                    {
                        negativeText &&
                        <Button secondary onClick={negativeAction ?? onCloseModal}>
                            {negativeText}
                        </Button>
                    }
                    <Button onClick={positiveAction ?? onCloseModal}>
                        {positiveText}
                    </Button>
                </div>
            </div>
        </StyledModal>
    )
}

export default Modal;