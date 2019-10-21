import React from 'react';
import './UserInfo.css';
import LinkBtn from './LinkBtn';

const UserInfo = () => {
    return (
        <div className='UserInfo'>
            <LinkBtn name='회원가입'/>
            <LinkBtn name='로그인'/>
        </div>
    )
}

export default UserInfo