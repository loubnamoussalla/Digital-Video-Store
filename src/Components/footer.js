import React from 'react';
import '../CSS/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-center">
        <p>© 2025 Digital Video Store</p>
      </div>
      <div className="footer-right">
        <a href="#facebook" className="social">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#twitter" className="social">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </footer>

  );
}
