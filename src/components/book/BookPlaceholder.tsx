import styled from "styled-components";

const StyledBookPlaceholder = styled.div`
    margin: 1rem;
    width: 20rem;
    height : 20rem;
    border-radius: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    @media only screen and (max-width: 768px) {
        margin: 1rem 0 0;
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
        <StyledBookPlaceholder>
            
        </StyledBookPlaceholder>
    )
}

export default BookPlaceholder;