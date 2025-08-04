import { useState, React, useContext } from 'react';
import mylogo from '../mylogo.png';
import '../CSS/header.css';
import { useNavigate } from 'react-router-dom';
import Register from './register';
import Login from './login';
import { UserContext } from '../Contexts/UserContext';
import { getUserById } from '../API/users';
import Profile from './profile'; 

export default function Header() {
  const navigate = useNavigate();
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const { token, logout } = useContext(UserContext);
  const [isProfileOpen, setIsProfileOpen] = useState(false);


const handleLogOut = () => {
  navigate('/');

logout();
}
  return (
    <header className="nav-bar">
      <img onClick={() => navigate('/')} className="logo-style" src={mylogo} alt={"Zero"} />

      <nav className="nav-content">
        <h3 onClick={() => navigate('/listings')} className="nav-content-left">All movies & TV shows</h3>


        {
          token ? (
            <div className="div-token">
              <h3 onClick={() => navigate('/dashboard')} className="nav-content-words" href="#signup">Profile</h3>
              
              <h3 onClick={handleLogOut} className="nav-content-words" href="#signup">Logout</h3>
            </div>
          ) :
            (
              <>
                <h3 onClick={() => setIsRegisterOpen(true)} className="nav-content-words" href="#signup">Register</h3>
                <Register
                  isOpen={isRegisterOpen}
                  onClose={() => setIsRegisterOpen(false)}
                />
                <h3 className="nav-content-words" onClick={() => setIsSignInOpen(true)} href="#login">Login</h3>
                <Login
                  isOpen={isSignInOpen}
                  onClose={() => setIsSignInOpen(false)}
                />
              </>
            )}

      </nav>

    </header>
  );
}
