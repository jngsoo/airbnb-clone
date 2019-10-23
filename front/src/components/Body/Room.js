import React from 'react';
import styled from 'styled-components';
import RoomImg from "./RoomImg";
import RoomInfo from "./RoomInfo";

const StyledDiv = styled.div`
    display: flex;
    height: 12rem;
    width: 90%;
    border: solid 0.05rem lightgray;
    border-radius: 0.5rem;
    margin: 1rem auto 1rem auto;
    &:hover {
        cursor: pointer;
    }
`;

const Room = (props) => {
    return (
        <StyledDiv>
            <RoomImg/>
            <RoomInfo title={props.title} description={props.description} price={props.price} score={props.score} numOfReviews={props.numOfReviews}/>
        </StyledDiv>
    )
};

export default Room;