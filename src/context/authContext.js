import { createContext, useEffect, useState } from 'react';

import { loginService, signUpService } from '../services';

export const AuthContext = createContext(null);

/**
 * if there is token, then allow the user to access private routes
 */

export const AuthProvider = ({ children }) => {
  const localStorageToken = JSON.parse(localStorage.getItem('login'));
  const [token, setToken] = useState(localStorageToken?.token);

  const localStorageUser = JSON.parse(localStorage.getItem('user'));
  const [user, setUser] = useState(localStorageUser?.user);

  const loginUser = async (email, password) => {
    if (email && password !== '') {
      try {
        const {
          data: { foundUser, encodedToken },
          status,
        } = await loginService(email, password);

        if (status === 200) {
          localStorage.setItem('login', JSON.stringify({ token: encodedToken }));
          setToken(encodedToken);

          localStorage.setItem('user', JSON.stringify({ user: foundUser }));
          setUser(foundUser);
        }
      } catch (error) {
        console.log('Error in login user', error);
      }
    }
  };

  const signUpUser = async (email, password, firstName, lastName) => {
    try {
      const {
        data: { createdUser, encodedToken },
        status,
      } = await signUpService(email, password, firstName, lastName);
      if (status === 201) {
        localStorage.setItem('signup', JSON.stringify({ token: encodedToken }));
        setToken(encodedToken);
        localStorage.setItem('user', JSON.stringify({ user: createdUser }));
        setUser(createdUser);
      }
    } catch (error) {
      console.log('Error in login user', error);
    }
  };

  const logout = async () => {
    localStorage.removeItem('login');
    localStorage.removeItem('user');
    localStorage.removeItem('signup');
  };

  return (
    <AuthContext.Provider value={{ token, setToken, loginUser, signUpUser, user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
