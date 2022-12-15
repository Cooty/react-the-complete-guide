import { NavLink } from 'react-router-dom';

import classes from './MainHeader.module.css';

const MainHeader = () => {
  const setNavLinkToActive = (navState) => navState.isActive ? classes.active : undefined;

  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink className={setNavLinkToActive} to='/welcome'>
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink className={setNavLinkToActive} to='/products'>
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
