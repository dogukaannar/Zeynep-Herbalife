// src/components/Button.js
import React from 'react';
import './Button.css';

const Button = ({ text, onClick }) => (
  <button className="archicraft-button" onClick={onClick}>
    {text}
  </button>
);

export default Button;
