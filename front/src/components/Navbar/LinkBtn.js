import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    border: solid 0.05rem white;
    margin: auto;
    color: dimgray;
    width: 10rem; 
    text-align: center;
    align-items: center;
    
    &:hover {
        height: 3rem;
        border-bottom: solid 0.08rem;
        cursor: pointer;
    }
`;

const StyledAnchor = styled.a`
    color: dimgray; 
    text-decoration: none;
`;

const LinkBtn = (props) => {
    return (
        <StyledDiv onClick={props.onClick} className='LinkBtn'>
            <StyledAnchor href={props.link}>
            <p>{props.name}</p>
            </StyledAnchor>
        </StyledDiv>
    )
}

export default LinkBtn