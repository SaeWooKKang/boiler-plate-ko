import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Auth from '../../../hoc/auth';

const LandingPage = () => {
  const navigate = useNavigate();

  const onLogoutHandler = () => {
    axios.get('./api/users/logout')
      .then(response => response.data.success 
          ? navigate('/login') 
          : alert('Fail to logout')
      );
  };
  return (
    <div style={{
      display:'flex', justifyContent: 'center', alignItems: 'center',
      width: '100%', height: '100vh'
    }}>
      <div style={{display:'flex', flexDirection:'column'}}>
        <h2>시작 페이지...</h2>
        <button onClick={onLogoutHandler}>로그아웃</button>
      </div>
    </div>
  );
};

export default Auth(LandingPage, null);