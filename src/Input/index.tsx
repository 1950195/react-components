import React from 'react';
import { Input as BSInput } from 'reactstrap';
import styled from 'styled-components';

import v from 'style/v';

const CustomInput = styled(BSInput)<IInputProps>`
  border-radius: 0;
  height: 2.5rem;
  padding-left: .5rem;
  border-color: ${v('$grayscale-silverlight')};
  ::placeholder {
    color: ${v('$grayscale-silverlight')};
  }
  &:focus {
    border-color: ${v('$control-pacific')};
  }
`;

export interface IInputProps {
  type?: 'text' | 'password';
  disabled?: boolean;
  placeholder?: string;
}

export const Input = ({
  type = 'text',
  disabled,
  placeholder,
}: IInputProps) => {
  return (
    <CustomInput {...{ type, disabled, placeholder }} />
  );
};

export default Input;
