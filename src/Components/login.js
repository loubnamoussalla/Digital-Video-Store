import React, { useState, useContext } from 'react';
import '../CSS/loginform.css';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../API/users';
import { UserContext } from '../Contexts/UserContext';

const Login = ({ isOpen, onClose }) => {
  const [user, setUser] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const [errmessage, seterrMessage] = useState('');
  const navigate = useNavigate();
  const { setToken } = useContext(UserContext);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(user);
      if(res.message === "Login successful")
      {
      setToken(res.body);
      setMessage("Logged in successfully!");
      seterrMessage("");
      setTimeout(() => {
        setMessage("");
        seterrMessage("");
        onClose();
        navigate("/");
      }, 2000);
      window.location.reload();

    }
    } catch (err) {
      seterrMessage(err.message || "Login failed.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>×</button>
        <h2 className="popup-title">Log In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={(e)=>{
                setUser({
                  ...user,
                  email:e.target.value
                })
              } }
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={(e)=>{
                setUser({
                  ...user,
                  password:e.target.value
                })
              } }
              required
            />
          </div>
          {message && <div className="popup-success">{message}</div>}
          {errmessage && <div className="errormsg">{errmessage}</div>}
          <button type="submit" className="submit-button">Log In</button>
        </form>

      </div>
    </div>
  );
};

export default Login;