import React from 'react';
import styled from 'styled-components';
import RoomMinorInfo from "./RoomMinorInfo";

const StyledInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: 0.25rem 1.5rem 0.25rem 1.5rem;
    width: 60%;
    color: dimgray;
    
    & > h3 {
        text-align: left;
        margin: 1rem 2rem 1rem 0rem;
    }
`;

const RoomInfo = (props) => {
    return (
        <StyledInfo>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <RoomMinorInfo price={props.price} score={props.score} numOfReviews={props.numOfReviews}/>
        </StyledInfo>
    )
};


export default RoomInfo;