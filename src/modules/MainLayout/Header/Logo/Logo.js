import React from 'react';
import './Logo.scss';
import logotyp from './logotyp.png';

export const Logo = (props) => {
  return (
    <div className='logo-container'>
      <img src={logotyp} className='logotyp' alt="Logo" />
    </div>
  );
}
