import React from 'react';
import { Button as BSButton } from 'reactstrap';

export interface IButtonProps {
  type?: 'primary' | 'raised' | 'linking' | 'outlined';
  disabled?: boolean;
  onClick?: ((event: React.MouseEvent<any, MouseEvent>) => void) | undefined;
  children: any;
}

export const Button = ({
  type,
  disabled = false,
  onClick,
  children,
}: IButtonProps) => {
  let colorProp = 'secondary';

  if (type === 'primary') {
    colorProp = 'primary';
  } else if (type === 'raised') {
    colorProp = 'raised';
  } else if (type === 'linking') {
    colorProp = 'link';
  }

  return (
    <BSButton
      outline={type === 'outlined'}
      color={colorProp}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </BSButton>
  );
};

export default Button;
