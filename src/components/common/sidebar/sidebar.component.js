import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks';

export const SideBar = () => {
  const { token, logout } = useAuth();

  const navigate = useNavigate();

  const logOutHandler = () => {
    logout();
  };
  return (
    <>
      <nav>
        <ul style={{ display: 'flex', fontSize: ' 24px', color: 'white', gap: '4rem' }}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/playlist'>Playlist</Link>
          </li>
          <li>
            <Link to='/liked'>Liked</Link>
          </li>
          <li>
            <Link to='/watchlater'>watch Later</Link>
          </li>
          <li>
            <Link to='/history'>history</Link>
          </li>
          {token && <button onClick={logOutHandler}>logout</button>}
        </ul>
      </nav>
    </>
  );
};
