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

const Rate = (props) => {
    return (
        <StyledDiv>
            <p className='star'>&#9733;</p>
            <p>{props.score}</p>
        </StyledDiv>
    )
};


export default Rate;