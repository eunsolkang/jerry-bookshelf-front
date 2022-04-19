import React from 'react';
import styled from "styled-components";

type RatingComponentType = {
    rating: number;
}

const StyledRating = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: .5rem;
    & > img{
      width: 15px;
    }
    & > img + img{
      margin-left: .25rem;
    }
`

const Rating:React.FC<RatingComponentType> = ({rating = 0}) => {
    const fullStarCount:number = Math.floor(rating)
    const isHalfStar:boolean  = (rating - fullStarCount )> 0;
    return (
        <StyledRating>
            {(new Array(fullStarCount).fill(0)).map((count, index)=>{
                return (
                    <img key={index} src={'icon/full-star.png'}/>
                );
            })}
            {
                isHalfStar && (<img src={'icon/half-star.png'}/>)
            }
        </StyledRating>
    );
};

export default Rating;