import React, { useState } from 'react';
import '../CSS/loginform.css';
import { registerUser } from '../API/users';
import { useNavigate } from 'react-router-dom';

const Register = ({ isOpen, onClose }) => {
  const [user, setUser] = useState({ firstName: '', lastName: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const [errmessage, seterrMessage] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await registerUser(user);
  
      if (res.message === "User created successfully") {
        setMessage("Registered successfully!");
        seterrMessage("");
        setUser({ firstName: '', lastName: '', email: '', password: '' });
        setTimeout(() => {
          setMessage("");
          seterrMessage("");
          onClose();           
          navigate("/");       
        }, 2000);
      }
    } catch (err) {
      seterrMessage(err.message); 
    }
  };
  

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>×</button>
        <h2 className="popup-title">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First Name:</label>
            <input
            name="firstName"
              type="text"
              id="firstName"
              value={user.firstName}
              onChange={(e)=>{
                setUser({
                  ...user,
                  firstName:e.target.value
                })
              } }
              required
            />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input
             name="lastName"
              type="text"
              value={user.lastName}
              onChange={(e)=>{
                setUser({
                  ...user,
                  lastName:e.target.value
                })
              } }
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
             name="email"
              type="email"
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
             name="password"
              type="password"
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
          <button type="submit" className="submit-button">Submit</button>
        </form>

      </div>
    </div>
  );
};

export default Register;