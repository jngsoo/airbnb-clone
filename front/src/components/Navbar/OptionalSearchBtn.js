import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    height: 2rem;
    align-items: center;
    display: flex;
    color: gray;
    margin: auto auto auto 0.5rem;
    
    &:hover {
        cursor: pointer;
    }
`;

const StyledImg = styled.img`
    height: 1rem;
    width: 1rem;
    margin: auto 1rem auto auto;
    
`;

const OptionalSearchBtn = (props) => {
    return (
        <StyledDiv>
            <StyledImg src={props.icon} alt={props.name}/>
            <p>{props.name}</p>
        </StyledDiv>
    );
};

export default OptionalSearchBtn;