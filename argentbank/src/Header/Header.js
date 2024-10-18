import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../redux/userSlice';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import ArgentBankLogo from './argentBankLogo.webp';

const Header = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.userInfo);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const handleSignOut = () => {
    dispatch(logoutUser());
  };

  return (
    <header>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={ArgentBankLogo}
            alt="Argent Bank Logo"
          />
        </Link>
        
        <div>
          {isAuthenticated ? (
            <div className="main-nav-item">
              <Link to={`/user/${userInfo?._id}`} className="main-nav-item">
                <FontAwesomeIcon icon={faUserCircle} /> {userInfo?.firstName}
              </Link>
              <button  className="main-nav-item" onClick={handleSignOut}>
                <FontAwesomeIcon icon={faSignOutAlt} /> Sign Out
              </button>
            </div>
          ) : (
            <Link to="/sign-in" className="main-nav-item">
              <FontAwesomeIcon icon={faUserCircle} /> Sign In
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
