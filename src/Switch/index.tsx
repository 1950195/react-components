import React from 'react';
import { Input } from 'reactstrap';
import styled from 'styled-components';

import v from 'style/v';

const CustomSwitch = styled.span<ISwitchProps>`
  height: 16px;
  width: 32px;
  position: relative;
  display: inline-block;
  border-radius: 8px;
  ${({ checked, disabled }) => checked && !disabled
    ? `background-color: ${v('$control-kaiju')}`
    : `border: 1px solid ${v('$grayscale-silverlight')};`
  }
  > span {
    position: absolute;
    ${({ checked, disabled }) => checked && !disabled
      ? `
        height: 10px;
        width: 10px;
        right: 3px;
        top: 3px;
      `
      : `
        height: 12px;
        width: 12px;
        ${checked ? `right` : `left`}: 1px;
        top: 1px;
        border: 1px solid ${v('$grayscale-silverlight')};
      `
    }
    background-color: ${v('$grayscale-white')};
    border-radius: 50%;
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
