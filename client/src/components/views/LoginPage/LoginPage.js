import { response } from 'express';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { loginUser} from '../../../_actions/user_action';

function LoginPage() {
  const dispatch = useDispatch();

  const [Email, setEmail] = useState('');
  const [Passowrd, setPassword] = useState('');

  const onEmailHandler = event => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordHandler = event => {
    setPassword(event.currentTarget.value);
  }
  const onSubmitHandler = event => {
    event.preventDefault();

    let body = {
      email: Email,
      password: Passowrd
    };

    dispatch(loginUser(body));

    
  };
  return (
    <div style={{
      display:'flex', justifyContent: 'center', alignItems: 'center',
      width: '100%', height: '100vh'
    }}>
      <form style={{display: 'flex', flexDirection: 'column'}}
        onSubmit={onSubmitHandler}>
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />
        <label>password</label>
        <input type="password" value={Passowrd} onChange={onPasswordHandler} />
        <br />
        <button>Login</button>
      </form>
    </div>
  )
}

export default LoginPage;