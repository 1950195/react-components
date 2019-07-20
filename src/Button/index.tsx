import React from 'react';
import { Button as BSButton } from 'reactstrap';
import styled from 'styled-components';
import v from 'style/v';

const CustomButton = styled(BSButton)`
  border-radius: 0;
  line-height: 1.625rem;
  &.btn-primary {
    background-color: ${v('$control-pacific')};
    border-color: ${v('$control-pacific')};
    color: ${v('$grayscale-white')};
  }
  &.btn-outline-primary {
    background-color: ${v('$grayscale-white')};
    border-color: ${v('$control-pacific')};
    color: ${v('$control-pacific')};
  }
  &.btn-link {
    color: ${v('$control-pacific')};
  }
  &.btn-secondary {
    &.disabled, &:disabled {
      background-color: ${v('$grayscale-haze')};
      border-color: ${v('$grayscale-baliHai')};
      color: ${v('$grayscale-silverlight')};
    }
  }
`;

export interface IButtonProps {
  color?: 'primary' | 'link';
  size?: 'lg' | 'sm';
  disabled?: boolean;
  radius?: boolean;
  onClick?: ((event: React.MouseEvent<any, MouseEvent>) => void) | undefined;
  children: any;
}

export const Button = ({
  color,
  size,
  disabled,
  onClick,
  children,
}: IButtonProps) => {
  let colorProp;
  let outline;

  if (disabled) {
    colorProp = 'secondary';
  } else if (!color) {
    colorProp = 'primary';
    outline = true;
  } else {
    colorProp = color;
  }

  return (
    <CustomButton
      {...{
        disabled,
        color: colorProp,
        outline,
        size,
        onClick,
      }}
    >
      {children}
    </CustomButton>
  );
};

export default Button;
