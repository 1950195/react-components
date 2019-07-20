import React from 'react';
import { Input } from 'reactstrap';
import styled from 'styled-components';
import v from 'style/v';

const CustomRadio = styled.span<IRadioProps>`
  height: 16px;
  width: 16px;
  position: relative;
  display: inline-block;
  border-radius: 50%;
  background-color: ${v('$grayscale-silverlight')};
  ${({ disabled }) => disabled
    ? `
      opacity: 0.65;
    `
    : `
      cursor: pointer;
    `}
  &:before {
    content: "";
    width: 14px;
    height: 14px;
    position: absolute;
    top: 1px;
    left: 1px;
    margin: 0;
    border-radius: 50%;
    ${({ checked }) => checked && `
      background-color: ${v('$control-pacific')};
    `}
  }
  &:after {
    content: "";
    position: absolute;
    border-radius: 50%;
    background-color: ${({ disabled }) => disabled ? v('$grayscale-haze') : v('$grayscale-white')};
    ${({ checked }) => checked
      ? `
        width: 6px;
        height: 6px;
        left: 5px;
        top: 5px;
      `
      : `
        width: 14px;
        height: 14px;
        left: 1px;
        top: 1px;
      `}
  }
  input[type=radio] {
    display: none;
  }
`;

export interface IRadioProps {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Radio = ({
  checked,
  disabled,
  onChange,
}: IRadioProps) => {
  return (
      <CustomRadio {...{ checked, disabled, onChange }}>
        <Input type="radio" {...{ checked, disabled, onChange }} />
      </CustomRadio>
  );
};

export default Radio;
