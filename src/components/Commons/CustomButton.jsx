import React from 'react';
import { Button } from 'antd';

const CustomButton = ({ children, style, tailWindClassName, type, ...props }) => {
  const buttonStyles = {
    ...style,
  };

  return (
    <Button type className={tailWindClassName} style={buttonStyles} {...props}>
      {children}
    </Button>
  );
};

export default CustomButton;
