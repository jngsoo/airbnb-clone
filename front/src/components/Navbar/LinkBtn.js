import React from 'react';
import styled, {css} from 'styled-components';

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

const LinkBtn = (props) => {
    return (
        <StyledDiv className='LinkBtn'>
            <a href="http://localhost:5000/auth/google">
            <p>{props.name}</p>
            </a>
        </StyledDiv>
    )
}

export default LinkBtn