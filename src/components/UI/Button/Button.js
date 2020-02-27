import React from 'react';
import classes from './Button.module.css';

const Button = ({ disabled, clicked, btnType, children }) => (
  <button
    disabled={disabled}
    onClick={clicked}
    className={[classes.Button, classes[btnType]].join(' ')}
  >
    {children}
  </button>
);

export default Button;
