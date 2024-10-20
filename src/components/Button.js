import React from 'react';
import '../styles/Button.css';
import border from '../images/button-border.svg';

const Button = ({ children }) => (
  <button className='button' type='button'>
    <img alt='Button border' src={border} />
    {children}
  </button>
);

export default Button;
