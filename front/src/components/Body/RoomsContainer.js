import React from 'react';
import styled from 'styled-components';
import Room from './Room';

const StyledDiv = styled.div`
    flex: 6;
`;

const RoomsContainer = (props) => {
    return (
        <StyledDiv>
            <Room/>
            <Room/>
            <Room/>
            <Room/>
            <Room/><Room/><Room/><Room/><Room/><Room/><Room/><Room/>
        </StyledDiv>
    )
}

export default RoomsContainer;