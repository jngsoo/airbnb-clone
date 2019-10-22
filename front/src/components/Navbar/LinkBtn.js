import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    border: solid 0.05rem white;
    margin: auto;
    color: dimgray;
    
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
        <StyledDiv className='LinkBtn'>
            <StyledAnchor href="http://localhost:5000/auth/google">
            <p>{props.name}</p>
            </StyledAnchor>
        </StyledDiv>
    )
}

export default LinkBtn