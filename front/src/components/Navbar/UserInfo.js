import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import LinkBtn from './LinkBtn';
import axios from 'axios';
import { useCookies } from 'react-cookie';
const serverURL = 'http://localhost:5000';

const StyledDiv = styled.div`
    display: flex;
    border: solid 0.05rem white;
    margin: auto 2rem auto auto;
`;

const UserInfo = () => {
    const [userInfo, setUserInfo] = useState();
    const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);

    useEffect( () => {
       axios.post(serverURL+'/auth/google/verify', {
           userToken : document.cookie.split('=')[1]
       })
       .then(response => {
           console.log(response);
           setUserInfo(response.data.userName);
       })
       .catch(err => console.log(err))
    }, []);

    const Logout = () => {
        removeCookie('user_info');
        setUserInfo(null)
    };

    return (
        <StyledDiv className='UserInfo'>
            {console.log(userInfo)}
            {userInfo ?
                <>
                    <LinkBtn name={`안녕하세요 ${userInfo}님`}/>
                    <LinkBtn name={'로그아웃'} onClick={Logout}/>
                </>
                             :
                <>
                    <LinkBtn link={"https://naver.com"} name='회원가입'/>
                    <LinkBtn link={`${serverURL}/auth/google`} name='로그인'/>
                </> }
        </StyledDiv>
    )
};

export default UserInfo