import React from 'react';
import styled from 'styled-components';
import RoomMinorInfo from "./RoomMinorInfo";

const StyledInfo = styled.div`
    // border: solid 0.05rem lightgray;
    margin: 0.25rem 0.25rem 0.25rem 1.5rem;
    width: 60%;
    color: dimgray;
    
    & > h3 {
        text-align: left;
        border: solid 0.05rem gray;
        margin: 1rem 2rem 1rem 0rem;
    }
`;

const RoomInfo = (props) => {
    return (
        <StyledInfo>
            <h3>깨끗하고 안전한 개인룸, 취사, 세탁 가능. 공항 3분거리 쾌적한 방</h3>
            <p>설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명</p>
            <RoomMinorInfo/>
        </StyledInfo>
    )
};


export default RoomInfo;