import React from 'react';
import { Button as BSButton } from 'reactstrap';

type ButtonProps = {
  primary?: boolean,
  outlined?: boolean,
  raised?: boolean,
  linking?: boolean,
  disabled?: boolean,
  children: any,
}

const Button: React.FC<ButtonProps> = ({
  primary = false,
  outlined = false,
  raised = false,
  linking = false,
  disabled = false,
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
    >
      {children}
    </BSButton>
  );
}

export default Button;
