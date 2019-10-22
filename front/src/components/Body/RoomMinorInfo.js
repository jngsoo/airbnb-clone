import React from 'react';
import styled from 'styled-components';
import Rate from './Rate';
import Price from "./Price";

const MinorInfo = styled.div`
    display: flex;
    justify-content: space-between;

`;

const RoomMinorInfo = (props) => {
    return (
        <MinorInfo>
            <Rate score={props.score}/>
            <Price price={props.price}/>
        </MinorInfo>
    )
};


export default RoomMinorInfo;