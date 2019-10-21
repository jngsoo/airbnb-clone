import React from 'react';
import './LinkBtn.css'

const LinkBtn = (props) => {
    return (
        <div className='LinkBtn'>
            <p>{props.name}</p>
        </div>
    )
}

export default LinkBtn