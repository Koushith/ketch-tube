import { NavBar } from '../navbar';
import { SideBar } from '../sidebar/sidebar.component';

export const AppLayout = ({ children }) => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <div>
          <SideBar />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
