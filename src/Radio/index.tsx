import React, { useState } from 'react';
import styled from 'styled-components';

import Icon from 'Icon';
import v from 'style/v';

const CustomRadio = styled.span<IRadioProps>`
  height: 16px;
  width: 16px;
  position: relative;
  display: inline-block;
  border: 1px solid ${v('$grayscale-silverlight')};
  border-radius: 50%;
  > :first-child {
    position: absolute;
    top: -1px;
    left: -1px;
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
    > :first-child {
      opacity: 1;
      animation: bounceout .25s;
    }
  `}
`;

export interface IRadioProps {
  checked?: boolean;
  disabled?: boolean;
  handleChange?: (checked: boolean) => void;
}

export const Radio = ({
  checked: checkedFromProp,
  disabled,
  handleChange,
}: IRadioProps) => {
  const [checked, toggleChecked] = useState(checkedFromProp);

  return (
    <CustomRadio
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
        <Icon name="dot-circle" color={v('$control-pacific')} />
      )}
    </CustomRadio>
  );
};

export default Radio;
