import axios from 'axios';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks';
import { Spacer } from './spacer';

export const RegisterScreen = () => {
  const [signupForm, setSignUpForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const { token, signUpUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const submitHandler = () => {
    const { email, password, firstName, lastName } = signupForm;
    if (email && password && firstName && lastName !== '') {
      signUpUser(email, password, firstName, lastName);
    }
  };

  if (token) {
    setTimeout(() => {
      // navigate to the path from where it was before or navigate to home screen.
      navigate(location?.state?.from || '/', { replace: true });
    }, 1000);
  }

  return (
    <>
      <h3>Sign Up</h3>
      <div style={{ width: '600px', margin: '0 auto' }}>
        <input
          placeholder='first  name'
          value={signupForm.firstName}
          onChange={(e) => setSignUpForm({ ...signupForm, firstName: e.target.value })}
        />
        <Spacer />
        <input
          placeholder='last name'
          value={signupForm.lastName}
          onChange={(e) => setSignUpForm({ ...signupForm, lastName: e.target.value })}
        />
        <Spacer />
        <input
          placeholder='email'
          inputMode='email'
          value={signupForm.email}
          onChange={(e) => setSignUpForm({ ...signupForm, email: e.target.value })}
        />
        <Spacer />
        <input
          placeholder='password'
          inputMode='password'
          value={signupForm.password}
          onChange={(e) => setSignUpForm({ ...signupForm, password: e.target.value })}
        />
        <Spacer />
        <label className='select-input'>
          <input type='checkbox' name='light' className='checkbox-input' required />
          <span className='text'>I accept all Terms & Conditions</span>
        </label>
        <button onClick={submitHandler}>create New Account</button>
        <Spacer />
      </div>
    </>
  );
};
