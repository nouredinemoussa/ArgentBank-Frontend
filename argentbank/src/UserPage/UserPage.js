import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setUserInfo } from '../redux/userSlice';
import './UserPage.css';
import Account from '../Account/Account';

const UserPage = () => {
  const { id } = useParams();
  console.log('ID from URL:', id);

  const user = useSelector((state) => state.user.userInfo);
  console.log('User from Redux:', user);

  const dispatch = useDispatch();
  const [username, setUsername] = useState(user?.userName || '');
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState(user?.firstName || '');
  const [lastName, setLastName] = useState(user?.lastName || '');

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem('token');
      console.log('Token récupéré:', token);

      if (!token) {
        console.error('Token non trouvé');
        return;
      }

      try {
        const response = await fetch('http://localhost:3001/api/v1/user/profile', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        const userData = await response.json();
        console.log("Données utilisateur récupérées:", userData);

        if (response.ok) {
          dispatch(setUserInfo(userData.body));
          setUsername(userData.body.userName);
          setFirstName(userData.body.firstName);
          setLastName(userData.body.lastName);
        } else {
          console.error('Erreur lors de la récupération des infos utilisateur:', userData.message);
        }
      } catch (error) {
        console.error('Erreur réseau ou autre:', error);
      }
    };

 
    if (!user || user.id !== id) {
      fetchUserProfile();
    } else {
 
      setUsername(user.userName);
      setFirstName(user.firstName);
      setLastName(user.lastName);
    }
  }, [id, user, dispatch]);
  const handleEdit = () => {
    setIsEditing(true); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    console.log('Token:', token);

    if (!token) {
      console.error('Token non trouvé');
      return;
    }

    if (!user || !user.id) {
      console.error('User ID non trouvé');
      return;
    }

    try {
      const response = await fetch(`http://localhost:3001/api/v1/user/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ userName: username }),
      });

      if (response.ok) {
        dispatch(setUserInfo({ ...user, userName: username }));
        setIsEditing(false);
      } else {
        console.error('Erreur lors de la mise à jour du username:', response.statusText);
      }
    } catch (error) {
      console.error('Erreur réseau ou autre:', error);
    }
  };

  return (
    <main className="main bg-dark">
      {isEditing ? (
        <form onSubmit={handleSubmit} className="edit-form">
          <div className="input-wrapper">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              readOnly
              className="grey-input"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              readOnly
              className="grey-input"
            />
          </div>
          <div className="button-container">
            <button type="submit" className="edit-button">Save</button>
            <button type="button" onClick={() => setIsEditing(false)} className="edit-button">Cancel</button>
          </div>
        </form>
      ) : (
        <h1>Welcome back {username}!</h1> 
      )}
      <button className="edit-button" onClick={handleEdit}>Edit Name</button>
      <section className="accounts">
        <Account title={"Argent Bank Checking (x8349)"} amount={"$2,082.79"} />
        <Account title={"Argent Bank Savings (x6712)"} amount={"$10,928.42"} />
        <Account title={"Argent Bank Credit Card (x8349)"} amount={"$184.30"} />
      </section>
    </main>
  );
};

export default UserPage;
