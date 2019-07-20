import React from 'react';
import { Input } from 'reactstrap';
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
  ${({ disabled }) => disabled
    ? `
      opacity: 0.65;
      background-color: ${v('$grayscale-haze')};
    `
    : `cursor: pointer;`
  }
  ${({ checked }) => checked && `
    > :first-child {
      position: absolute;
      top: -1px;
      left: -1px;
    }
  `}
  input[type=checkbox] {
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
        {checked && !disabled && (
          <Icon name="dot-circle" color={v('$control-pacific')} />
        )}
        <Input type="checkbox" {...{ checked, disabled, onChange }} />
      </CustomRadio>
  );
};

export default Radio;
