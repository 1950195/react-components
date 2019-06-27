import React from 'react';
import { Button as BSButton } from 'reactstrap';
import styled from 'styled-components';

const CustomButton = styled(BSButton)`
  &.btn-raised {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
                rgba(0, 0, 0, 0.14) 0px 2px 2px 0px,
                rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
    transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

    &:active {
      box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px,
                  rgba(0, 0, 0, 0.14) 0px 8px 10px 1px,
                  rgba(0, 0, 0, 0.12) 0px 3px 14px 2px;
    }

    &:hover, &:focus {
      box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,
                  rgba(0, 0, 0, 0.14) 0px 4px 5px 0px,
                  rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
    }
  }

  ${({ dashed }) => dashed && `
    color: #6c757d;
    border-color: #6c757d;
    border-style: dashed;
    background-color: #fff;

    &:active, &:hover, &:focus {
      color: #fff;
      background-color: #6c757d;
    }

    &:disabled {
      color: #6c757d;
      background-color: #fff;
    }
  }`}
`;

export interface IButtonProps {
  type?: 'primary' | 'raised' | 'linking';
  size?: 'lg' | 'sm';
  outlined?: boolean;
  dashed?: boolean;
  disabled?: boolean;
  onClick?: ((event: React.MouseEvent<any, MouseEvent>) => void) | undefined;
  children: any;
}

export const Button = ({
  type,
  size,
  outlined,
  dashed,
  disabled,
  onClick,
  children,
}: IButtonProps) => {
  let colorProp;

  switch (type) {
    case undefined:
      colorProp = 'secondary';
      break;
    case 'raised':
      colorProp = 'raised';
      break;
    case 'linking':
      colorProp = 'link';
      break;
    default:
      colorProp = type;
  }

  return (
    <CustomButton
      {...{
        disabled,
        color: colorProp,
        outline: outlined,
        dashed,
        size,
        onClick,
      }}
    >
      {children}
    </CustomButton>
  );
};

export default Button;
