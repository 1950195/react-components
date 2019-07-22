import React, { useState } from 'react';
import styled from 'styled-components';

import Icon from 'Icon';
import v from 'style/v';

const CustomCheckbox = styled.span<ICheckboxProps>`
  height: 16px;
  width: 16px;
  position: relative;
  display: inline-block;
  border: 1px solid ${v('$grayscale-silverlight')};
  > :first-child {
    position: absolute;
    top: -1px;
    opacity: 0;
    transition: opacity .25s ease-in-out;
  }
  ${({ disabled }) => disabled
    ? `
      opacity: 0.65;
      background-color: ${v('$grayscale-haze')};
    `
    : `cursor: pointer;`
  }
  ${({ checked }) => checked && `
    &:before {
      content: "";
      position: absolute;
      height: 14px;
      width: 14px;
      border: 1px solid ${v('$control-pacific')};
    }
    > :first-child {
      opacity: 1;
      animation: bounceout .25s;
    }
  `}
`;

export interface ICheckboxProps {
  checked?: boolean;
  disabled?: boolean;
  handleChange?: (checked: boolean) => void;
}

export const Checkbox = ({
  checked: checkedFromProp,
  disabled,
  handleChange,
}: ICheckboxProps) => {
  const [checked, toggleChecked] = useState(checkedFromProp);

  return (
    <CustomCheckbox
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
      {!disabled && (
        <Icon name="check-square" color={v('$control-pacific')} />
      )}
    </CustomCheckbox>
  );
};

export default Checkbox;
