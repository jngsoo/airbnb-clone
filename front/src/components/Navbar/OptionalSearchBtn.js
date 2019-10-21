import React from 'react';
import './OptionalSearchBtn.css';

const OptionalSearchBtn = (props) => {
    return (
        <div className='OptionalSearchBtn'>
            <img src={props.icon} alt={props.name}/>
            <p>{props.name}</p>
        </div>
    );
}

export default OptionalSearchBtn;