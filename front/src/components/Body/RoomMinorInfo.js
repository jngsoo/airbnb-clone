import React from 'react';
import styled from 'styled-components';

const MinorInfo = styled.div`
    border: solid 0.05rem lightgray;
    display: flex;
    justify-content: space-between;
    
    & > * {
        border: solid gray 0.05rem
    }

    
`;

const RoomMinorInfo = (props) => {
    return (
        <MinorInfo>
            <span>별</span>
            <p>가격</p>
        </MinorInfo>
    )
};


export default RoomMinorInfo;