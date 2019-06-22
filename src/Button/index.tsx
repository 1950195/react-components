import React from 'react';
import { Button as BSButton } from 'reactstrap';

type ButtonProps = {
  outlined?: boolean,
  children: any,
}

const Button: React.FC<ButtonProps> = ({ outlined = true, children }) => {
  return (
    <BSButton outline={outlined} color={outlined ? 'secondary' : 'link'}>
      {children}
    </BSButton>
  );
}

export default Button;
