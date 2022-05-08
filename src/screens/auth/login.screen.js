import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../hooks';
import { Spacer } from './spacer';

export const LoginScreen = () => {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const location = useLocation();
  const { token, loginUser } = useAuth();

  const guestUser = {
    email: 'guest@gmail.com',
    password: 'guest123',
  };

  useEffect(() => {
    (async () => {
      loginUser(loginForm.email, loginForm.password);
    })();
  }, [loginForm.email, loginForm.password]);

  const loginHandler = () => {
    setLoginForm((form) => ({
      ...form,
      email: 'guest@gmail.com',
      password: 'guest123',
    }));
  };

  if (token) {
    setTimeout(() => {
      navigate(location?.state?.from || '/', { replace: true });
    }, 1000);
  }

  return (
    <>
      <h3>Login Up</h3>
      <div style={{ width: '600px', margin: '0 auto' }}>
        <Spacer />
        <input
          placeholder='email'
          inputMode='email'
          value={loginForm.email}
          onChange={(e) => setLoginForm((form) => ({ ...form, email: e.target.value }))}
        />
        <Spacer />
        <input
          placeholder='password'
          inputMode='password'
          value={loginForm.password}
          onChange={(e) => setLoginForm((form) => ({ ...form, password: e.target.value }))}
        />

        <Spacer />
        {/* <Button type='success' onClick={login}>
          sign in
        </Button> */}
        <Spacer />
        <button type='success' onClick={() => loginHandler()}>
          Guest User
        </button>
        <Link to='/register' state={{ from: location?.state?.from }}>
          <div className='auth-secondary-btn text-center'>
            Create New Account <i className='fa fa-chevron-right' aria-hidden='true'></i>
          </div>
        </Link>
        <Spacer />
      </div>
    </>
  );
};
