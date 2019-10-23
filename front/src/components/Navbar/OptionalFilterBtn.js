import React, {useState} from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border: solid 0.05rem lightgray;
    border-radius: 0.5rem;
    font-size: 0.8rem;
    height: 1rem;
    margin: auto 0.5rem auto 0.5rem;
    color: dimgray;
    
    &:hover {
        cursor: pointer;
        background-color: #ebebeb;
        border-color: #ebebeb;
        
    } 
`;

const OptionalFilterBtn = (props) => {
    return (
        <StyledDiv>
            {props.name}
        </StyledDiv>
    );
};


export default OptionalFilterBtn;