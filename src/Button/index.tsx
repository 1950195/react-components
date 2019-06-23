import React from 'react';
import { Button as BSButton } from 'reactstrap';

interface IButtonProps {
  primary?: boolean;
  outlined?: boolean;
  raised?: boolean;
  linking?: boolean;
  disabled?: boolean;
  onClick?: ((event: React.MouseEvent<any, MouseEvent>) => void) | undefined;
  children: any;
}

const Button: React.FC<IButtonProps> = ({
  primary = false,
  outlined = false,
  raised = false,
  linking = false,
  disabled = false,
  onClick,
  children,
}) => {
  let colorProp = 'secondary';

  if (primary) {
    colorProp = 'primary';
  } else if (raised) {
    colorProp = 'raised';
  } else if (linking) {
    colorProp = 'link';
  }

  return (
    <BSButton
      outline={outlined}
      color={colorProp}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </BSButton>
  );
};

export default Button;
