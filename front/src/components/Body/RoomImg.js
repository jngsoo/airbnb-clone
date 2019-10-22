import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
    width: 40%;
    margin: 0.25rem; 
    border-radius: 0.25rem;
`;

const RoomImg = (props) => {
    return (
        <StyledImg src={'https://a0.muscache.com/im/pictures/c448d8f3-3c31-4119-b69f-80f251621f94.jpg?aki_policy=large'}/>
    )
};

export default RoomImg;