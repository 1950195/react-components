import React from 'react';
import { Input } from 'reactstrap';
import styled from 'styled-components';

import Icon from 'Icon';
import v from 'style/v';

const CustomCheckbox = styled.span<ICheckboxProps>`
  height: 16px;
  width: 16px;
  position: relative;
  display: inline-block;
  border: 1px solid ${v('$grayscale-silverlight')};
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
      position: absolute;
      top: -1px;
    }
  `}
  input[type=checkbox] {
    display: none;
  }
`;

export interface ICheckboxProps {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = ({
  checked,
  disabled,
  onChange,
}: ICheckboxProps) => {
  return (
      <CustomCheckbox {...{ checked, disabled, onChange }}>
        {checked && !disabled && (
          <Icon name="check-square" color={v('$control-pacific')} />
        )}
        <Input type="checkbox" {...{ checked, disabled, onChange }} />
      </CustomCheckbox>
  );
};

export default Checkbox;
