import React from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import de FontAwesomeIcon
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'; // Import de l'icône utilisateur

const Header = ({ isAuthenticated, onSignOut }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    onSignOut(); 
    navigate('/sign-in'); // Redirection après la déconnexion
  };

  return (
    <header className="main-nav">
      <div className="main-nav-logo">
        <Link to="/">
          <img
            src="/argentBankLogo.webp"
            alt="Logo Argent Bank"
            className="main-nav-logo-image"
          />
        </Link>
      </div>
      
      <nav>
        {!isAuthenticated ? (
          <div className="main-nav-item">
            <FontAwesomeIcon icon={faUserCircle}/>
          <Link to="/sign-in" >
            Sign In
          </Link>
          </div>
        ) : (
          <div className="main-nav-item">
            <FontAwesomeIcon icon={faUserCircle} className="main-nav-item-icon" />
            <button className="main-nav-item" onClick={handleSignOut}>
              Sign Out
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
