import {useState, React} from 'react';
import mylogo from '../mylogo.png';
import '../CSS/header.css';
import { useNavigate } from 'react-router-dom';
import Register from './register';
import Login from './login';


export default function Header() {
  const navigate = useNavigate();
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);


  return (
    <header className="nav-bar">
      <img onClick={()=> navigate('/') } className="logo-style" src={mylogo} alt={"Zero"} />
      
      <nav className="nav-content">
      <h3 onClick={() => navigate('/listings')} className="nav-content-left">All movies & TV shows</h3>


        <h3 onClick={() => setIsRegisterOpen(true)} className="nav-content-words" href="#signup">Register</h3>
        <Register 
        isOpen={isRegisterOpen} 
        onClose={() => setIsRegisterOpen(false)} 
      />
        <h3  className="nav-content-words" onClick={() => setIsSignInOpen(true)}href="#login">Login</h3>
        <Login 
        isOpen={isSignInOpen} 
        onClose={() => setIsSignInOpen(false)} 
      />
      </nav>

    </header>
  );
}
