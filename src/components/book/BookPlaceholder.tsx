import styled from "styled-components";

const StyledBookPlaceholder = styled.div`
    ${({theme})=>theme.flex.columnCenter};
    width: 20rem;
    height : 20rem;
    border-radius: 24px;
    position: relative;
    
    @media only screen and (max-width: 1024px) {
        width: 100%;
        height: auto;
        border-radius: 4px;
        padding-bottom: 100%;
    }
    @-webkit-keyframes skeleton-gradient {
        0% {
            background-color: rgba(165, 165, 165, 0.1);
        }

        50% {
            background-color: rgba(165, 165, 165, 0.3);
        }

        100% {
            background-color: rgba(165, 165, 165, 0.1);
        }
    }

    @keyframes skeleton-gradient {
        0% {
            background-color: rgba(165, 165, 165, 0.1);
        }

        50% {
            background-color: rgba(165, 165, 165, 0.3);
        }

        100% {
            background-color: rgba(165, 165, 165, 0.1);
        }
    }
    -webkit-animation: skeleton-gradient 1.8s infinite ease-in-out;
    animation: skeleton-gradient 1.8s infinite ease-in-out;
`

const BookPlaceholder = () => {
    return (
        <StyledBookPlaceholder></StyledBookPlaceholder>
    )
}

export default BookPlaceholder;