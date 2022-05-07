import React from 'react';
import styled, { css } from "styled-components";

type RatingComponentType = {
    rating: number;
    onChangeRating?: (index: number) => void,
    size?: number,
}

const StyledRating = styled.div<{isRatingHover: boolean}>`
    margin-top: .5rem;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    .fill path{
        fill: #ffcc00;
    }
    svg{
        padding-right: .25rem;
        path{
            fill: #b4b4b4;
        }
    }
    ${props=>
        props.isRatingHover && css`
        svg:hover, svg:hover ~ svg{
            path{
                fill: #f7cd01;
            }
        }
        `
    }
`

const Rating:React.FC<RatingComponentType> = ({rating = 0, onChangeRating, size = 16}) => {
    return (
        <StyledRating isRatingHover={onChangeRating ? true:false} className='rating-input'>
            {[5, 4, 3, 2, 1].map((count, i)=>{
                return (
                    <svg
                        key={i} 
                        className={count <= rating ? 'fill' : ''} 
                        onClick={()=>onChangeRating && onChangeRating(count)} xmlns="http://www.w3.org/2000/svg" 
                        width={size} 
                        height={size} 
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                    </svg>
                );
            })}
        </StyledRating>
    );
};

export default Rating;