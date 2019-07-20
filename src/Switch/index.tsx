import React from 'react';
import { Input } from 'reactstrap';
import styled from 'styled-components';

import v from 'style/v';

const CustomSwitch = styled.span<ISwitchProps>`
  height: 16px;
  width: 32px;
  position: relative;
  display: inline-block;
  border: 1px solid ${v('$grayscale-silverlight')};
  border-radius: 8px;
  ${({ checked }) => checked && `background-color: ${v('$control-kaiju')}`}
  > span {
    position: absolute;
    height: 12px;
    width: 12px;
    ${({ checked }) => checked ? `right: 1px;` : `left: 1px;`}
    ${({ checked, disabled }) => (!checked || disabled) && `border: 1px solid ${v('$grayscale-silverlight')};`}
    background-color: ${v('$grayscale-white')};
    border-radius: 50%;
    top: 1px;
  }
  ${({ disabled }) => disabled
    ? `
      opacity: 0.65;
      background-color: ${v('$grayscale-haze')};
    `
    : `cursor: pointer;`
  }
  input[type=radio] {
    display: none;
  }
`;

export interface ISwitchProps {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Switch = ({
  checked,
  disabled,
  onChange,
}: ISwitchProps) => {
  return (
    <CustomSwitch {...{ checked, disabled, onChange }}>
      <span />
      <Input type="radio" {...{ checked, disabled, onChange }} />
    </CustomSwitch>
  );
};

export default Switch;
