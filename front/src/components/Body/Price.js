import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    font-weight: bold;

`;

const Price = (props) => {
    return (
        <StyledDiv>
            <p>₩{props.price}/박</p>
        </StyledDiv>
    )
};


export default Price;