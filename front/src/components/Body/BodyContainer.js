import React, {Fragment} from 'react';
import styled from 'styled-components';
import RoomsContainer from "./RoomsContainer";
import Map from "./Map"

const StyledContainer = styled.div`
    display: flex;
`;

const BodyContainer = (props) => {
    return (
        <StyledContainer>
            <RoomsContainer/>
            <Map/>
        </StyledContainer>
    )
};

export default BodyContainer;