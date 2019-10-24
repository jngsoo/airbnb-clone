import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Room from './Room';
import ModalOnLoading from "../Loading/ModalOnLoading";
import axios from 'axios';

const serverURL = 'http://localhost:5000';

const StyledDiv = styled.div`
    flex: 6;
`;

const RoomsContainer = () => {
    const [onLoading, setOnLoading] = useState(true);
    const [rooms, setRooms] = useState([]);

    useEffect( () => {
        axios.get(serverURL+'/room')
            .then(response => {
                setRooms(response.data);
                setOnLoading(false);
            })
            .catch(err => console.log(err))
    },[]);
    if (onLoading) return  <ModalOnLoading type={'spin'} color={'black'}/>;

    return (
        <StyledDiv>
            {rooms.map(room =>
                <Room title={room.name}
                      description={room.description}
                      price={`${room.price}`}
                      score={room.rate}
                      numOfReviews={room.number_of_reviews}
                                    />
            )}
        </StyledDiv>
    )
};

export default RoomsContainer;