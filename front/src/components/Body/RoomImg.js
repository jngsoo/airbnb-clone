import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
    width: 40%;
    margin: 0.25rem; 
    border-radius: 0.25rem;
`;

const RoomImg = (props) => {
    return (
        <StyledImg src={props.img}/>
    )
};

export default RoomImg;