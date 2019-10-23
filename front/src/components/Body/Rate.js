import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    font-size: 0.8rem;
    display: flex;
    
    & > p {
        margin: auto 0.5rem auto auto;
        color: green;
    {
`;

const Rate = ({score, numOfReviews}) => {
    return (
        <StyledDiv>
            <p>&#9733;</p>
            <p>{score}</p>
            <p>리뷰({numOfReviews})</p>
        </StyledDiv>
    )
};


export default Rate;