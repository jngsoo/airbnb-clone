import React from 'react';
import styled from 'styled-components';
import GoogleMap from "./GoogleMap";

const StyledMap = styled.div`
    top: 8rem;
    margin-top: 1rem;
    margin-right: 1rem;
    position: sticky;
    z-index: 0;
    height: 40rem;
    border: solid 0.05rem lightgray;
    border-radius: 1rem;
    flex: 4;
    overflow: hidden;
`;

const Map = () => {
    return (
        <StyledMap>
            <GoogleMap/>
        </StyledMap>
    )
};

export default Map;