import React, {useState} from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    color: dimgray;
`;
const CtrlPanel = styled.div`
    display: flex;
    align-items: center;
`;
const NumCtrlBtn = styled.div`
    width: 1rem;
    height: 1rem;
    text-align: center;
    padding: 0.7rem;
    border: 0.05rem solid;
    border-radius: 50%;
    border-color: green;
    color: green;
    &:hover {
        cursor: pointer;
    }
`;
const Num = styled.div`
    margin: auto 1rem;
`;
const GuestType = (props) => {
    return (
        <StyledDiv>
            <p>{props.type}</p>
            <CtrlPanel>
                <NumCtrlBtn>-</NumCtrlBtn>
                <Num>0</Num>
                <NumCtrlBtn>+</NumCtrlBtn>
            </CtrlPanel>
        </StyledDiv>
    )
};

export default GuestType;