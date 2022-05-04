import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div>
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
        </ul>
      </nav>
    </div>
  );
};
