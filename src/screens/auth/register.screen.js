import { Input, Spacer, Button } from '@geist-ui/core';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const RegisterScreen = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const signup = async () => {
    // try {
    //   const response = await axios.post(`/api/auth/signup`, {
    //     firstName: 'Adarsh',
    //     lastName: 'Balika',
    //     email: 'adarshbalika@neog.camp',
    //     password: 'adarshBalika',
    //   });
    //   // saving the encodedToken in the localStorage
    //   localStorage.setItem('token', response.data.encodedToken);
    //   console.log('data after signup', response);
    // } catch (error) {
    //   console.log(error);
    // }
    await axios
      .post('/api/auth/signup', {
        email: user.email,
        password: user.password,
      })
      .then((res) => {
        localStorage.setItem('token', res.data.encodedToken);
        navigate('/');
      })
      .catch((e) => console.log('got api error', e));
  };

  const submitHandler = () => {
    console.log('final user,', user);
    signup();
  };
  return (
    <>
      <h3>Sign Up</h3>
      <div style={{ width: '600px', margin: '0 auto' }}>
        <Input
          placeholder='first  name'
          value={user.firstName}
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        >
          Firest name
        </Input>
        <Spacer />
        <Input
          placeholder='last name'
          value={user.lastName}
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        >
          Last Name
        </Input>
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
        <Button type='success' onClick={submitHandler}>
          create New Account
        </Button>
        <Spacer />
      </div>
    </>
  );
};
