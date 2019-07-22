import React, { useState } from 'react';
import styled from 'styled-components';

import v from 'style/v';

const CustomSwitch = styled.span<ISwitchProps>`
  height: 16px;
  width: 32px;
  position: relative;
  display: inline-block;
  border-radius: 8px;
  background-color: ${v('$grayscale-white')};
  transition: all .3s linear;
  ${({ checked, disabled }) => checked && !disabled
    ? `
      background-color: ${v('$control-kaiju')};
      border: 1px solid ${v('$control-kaiju')};
    `
    : `border: 1px solid ${v('$grayscale-silverlight')};`
  }
  > span {
    position: absolute;
    border-radius: 50%;
    height: 12px;
    width: 12px;
    top: 1px;
    background-color: ${v('$grayscale-white')};
    border: 1px solid ${v('$grayscale-silverlight')};
    ${({ checked, disabled }) => !disabled && `
      transform: translateX(1px);
      transition: transform .3s ease-in-out;
      ${checked && `
        transform: translateX(calc(150% - 1px));
        border: 1px solid ${v('$control-kaiju')};
      `}
    `};
    ${({ checked, disabled }) => disabled && `
      ${checked ? `right` : `left`}: 1px;
    `}
  }
  ${({ disabled }) => disabled
    ? `
      opacity: 0.65;
      background-color: ${v('$grayscale-haze')};
    `
    : `cursor: pointer;`
  }
`;

export interface ISwitchProps {
  checked?: boolean;
  disabled?: boolean;
  handleChange?: (checked: boolean) => void;
}

export const Switch = ({
  checked: checkedFromProp,
  disabled,
  handleChange,
}: ISwitchProps) => {
  const [checked, toggleChecked] = useState(checkedFromProp);

  return (
    <CustomSwitch
      {...{ checked, disabled }}
      onClick={() => {
        if (disabled) {
          return;
        }

        toggleChecked(!checked);

        if (handleChange) {
          handleChange(!checked);
        }
      }}
    >
      <span />
    </CustomSwitch>
  );
};

export default Switch;
