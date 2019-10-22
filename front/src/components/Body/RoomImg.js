import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
    flex:4
    margin: 0.25rem; 
    border: solid 0.025rem lightgray;
    border-radius: 0.25rem;
`;

const RoomImg = (props) => {
    return (
        <StyledImg/>
    )
};

export default RoomImg;