'use client';

import { Button } from 'antd';
import { ButtonProps } from '@/types/button.type';

const Index: React.FC<ButtonProps> = ({ className, children, buttonType = 'default', ...props }) => {
  return (
    <Button {...props} className={`btn-${buttonType} ${className} border-none`}>
      {children}
    </Button>
  );
};

export default Index;
