'use client';

import React, { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  buttonType?: 'link' | 'text' | 'default' | 'primary' | 'dashed';
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, buttonType = 'default', ...props }) => {
  return (
    <button {...props} className={`btn-${buttonType}`}>
      {children}
    </button>
  );
};

export default Button;
