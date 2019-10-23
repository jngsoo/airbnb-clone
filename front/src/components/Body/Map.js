import React from 'react';
import styled from 'styled-components';

const StyledMap = styled.div`
    top: 5rem;
    position: sticky;
    z-index: -1;
    height: 43rem;
    border-radius: 1rem;
    flex: 4;
`;

const Map = () => {
    return (
        <StyledMap>
            <h1>I'm map</h1>
        </StyledMap>
    )
};

export default Map;