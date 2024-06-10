import React from 'react';
import './Payments.css';
import logo1 from '../../assets/visa-logo-svgrepo-com.svg';
import logo2 from '../../assets/mastercard-full-svgrepo-com.svg';
import logo3 from '../../assets/American-Express-Logo-PNG-Picture.png';
import logo4 from '../../assets/skrill-svgrepo-com.svg';
import logo5 from '../../assets/bitcoin-svgrepo-com.svg';
import logo6 from '../../assets/and_50_more.png';

function LogosSection() {
  return (
    <div className="logos-section">
      <img src={logo1} alt="Logo 1" className="logo" />
      <img src={logo2} alt="Logo 2" className="logo" />
      <img src={logo3} alt="Logo 3" className="logo" />
      <img src={logo4} alt="Logo 4" className="logo" />
      <img src={logo5} alt="Logo 5" className="logo" />
      <img src={logo6} alt="Logo 6" className="logo" />
    </div>
  );
}

export default LogosSection;
