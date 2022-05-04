import { Input, Spacer, Button } from '@geist-ui/core';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const LoginScreen = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const guestUser = {
    email: 'guest@gmail.com',
    password: 'guestuser',
  };
  const addGuestUser = () => {
    setUser(guestUser);
    login();
  };

  const navigate = useNavigate();

  const login = async () => {
    try {
      const response = await axios.post('/api/auth/login', {
        email: user.email,
        password: user.password,
      });
      localStorage.setItem('token', response.data.encodedToken);

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h3>Login Up</h3>
      <div style={{ width: '600px', margin: '0 auto' }}>
        <Spacer />
        <Input
          placeholder='email'
          inputMode='email'
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        >
          email
        </Input>
        <Spacer />
        <Input.Password
          placeholder='password'
          inputMode='password'
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        >
          password
        </Input.Password>
        <Spacer />
        <Button type='success' onClick={login}>
          sign in
        </Button>
        <Spacer />
        <Button type='success' onClick={addGuestUser}>
          Guest User
        </Button>
        <Spacer />
      </div>
    </>
  );
};
