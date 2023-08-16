import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import st from './Button.module.scss';

type ButtonProps = {
  text: string;
  backgroundColor?: string;
  showArrow?: boolean;
};

const Button: React.FC<ButtonProps> = ({ text, backgroundColor = 'bg-primary', showArrow = false }) => {
  const buttonClasses = `${st.button} ${backgroundColor}`;

  return (
    <button className={buttonClasses}>
      {showArrow && <FiArrowRight className="pr-4" />}
      {text}
    </button>
  );
};

export default Button;
