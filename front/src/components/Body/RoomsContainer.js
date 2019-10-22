import React from 'react';
import styled from 'styled-components';
import Room from './Room';

const StyledDiv = styled.div`
    flex: 6;
`;

const RoomsContainer = (props) => {
    return (
        <StyledDiv>
            <Room price={'34,214'} score={4.92}/>
            <Room price={'25,112'} score={3.91}/>
            <Room/>
            <Room/>
            <Room/><Room/><Room/><Room/><Room/><Room/><Room/><Room/>
        </StyledDiv>
    )
}

export default RoomsContainer;