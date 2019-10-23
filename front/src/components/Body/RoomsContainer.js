import React from 'react';
import styled from 'styled-components';
import Room from './Room';

const StyledDiv = styled.div`
    flex: 6;
`;

const RoomsContainer = () => {
    return (
        <StyledDiv>
            <Room title={'쾌적한 8인 도미토리룸. 공항 3분 거리.'} description={'설명 설명'} price={'34,214'} score={4.92} numOfReviews={20}/>
            <Room title={'쾌적한 8인 도미토리룸. 공항 3분 거리.'} description={'설명 설명'} price={'34,214'} score={4.92} numOfReviews={20}/>
            <Room title={'쾌적한 8인 도미토리룸. 공항 3분 거리.'} description={'설명 설명'} price={'34,214'} score={4.92} numOfReviews={20}/>
            <Room title={'쾌적한 8인 도미토리룸. 공항 3분 거리.'} description={'설명 설명'} price={'34,214'} score={4.92} numOfReviews={20}/>
            <Room title={'쾌적한 8인 도미토리룸. 공항 3분 거리.'} description={'설명 설명'} price={'34,214'} score={4.92} numOfReviews={20}/>
            <Room title={'쾌적한 8인 도미토리룸. 공항 3분 거리.'} description={'설명 설명'} price={'34,214'} score={4.92} numOfReviews={20}/>
            <Room/>
            <Room title={'쾌적한 8인 도미토리룸. 공항 3분 거리.'} description={'설명 설명'} price={'34,214'} score={4.92} numOfReviews={20}/>
            <Room title={'쾌적한 8인 도미토리룸. 공항 3분 거리.'} description={'설명 설명'} price={'34,214'} score={4.92} numOfReviews={20}/>
        </StyledDiv>
    )
}

export default RoomsContainer;