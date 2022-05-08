import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks';

import navbarStyles from './navbar.component.module.css';
import { Logo, NavbarContainer, NavbarMain, SearchContainer } from './navbar/navbar.styles';

export const NavBar = () => {
  const { token, logout } = useAuth();

  const navigate = useNavigate();

  const logOutHandler = () => {
    logout();
  };
  return (
    <NavbarContainer>
      <NavbarMain>
        <Logo className={navbarStyles.logo} onClick={() => navigate('/')}>
          KETCH
        </Logo>
        <SearchContainer>
          <i className='fa fa-search' aria-hidden='true'></i>
          <input type='text' placeholder='search' />
        </SearchContainer>

        <nav>
          <li>ds</li>
        </nav>
      </NavbarMain>
    </NavbarContainer>
  );
};
