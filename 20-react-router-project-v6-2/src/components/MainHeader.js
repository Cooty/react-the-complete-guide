import { NavLink, useNavigate } from 'react-router-dom';

import classes from './MainHeader.module.css';

const MainHeader = () => {
  const addActiveClass = (navigation) => navigation.isActive ? classes.active : undefined
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    navigate('/welcome/new-user');
  }

  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink className={addActiveClass} to='/welcome'>
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink className={addActiveClass} to='/products'>
              Products
            </NavLink>
          </li>
          <li>
            <button onClick={handleSignUp}>
              Sign up!
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
