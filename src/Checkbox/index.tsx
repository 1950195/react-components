import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Input } from 'reactstrap';
import v from 'style/v';
import { encodeIcon } from 'Icon';

const CustomCheckbox = styled(Input)`
  position: relative;
  margin-left: 0;
  display: inline-block;
  height: 16px;
  width: 16px;
  overflow: hidden;
  appearance: none;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80%;
  transition: background-color .2s ease-in-out;
  border: 1px solid ${v('$grayscale-silverlight')};
  outline: none;
  ${({ disabled }) => disabled
    ? `
      opacity: 0.65;
      background-color: ${v('$grayscale-haze')};
    `
    : `cursor: pointer;`
  }
  ${({ checked }) => checked && `
    background-color: ${v('$control-pacific')};
    background-image: ${encodeIcon({ name: 'check', color: '#fff' })};
  `}
`;

export interface ICheckboxProps {
  name: string;
  checked?: boolean;
  disabled?: boolean;
  handleChange?: (checked: boolean) => void;
}

export const Checkbox = ({
  name,
  checked: checkedFromProp,
  disabled,
  handleChange,
}: ICheckboxProps) => {
  const [checked, toggleChecked] = useState(checkedFromProp);

  useEffect(() => {
    toggleChecked(checkedFromProp);
  }, [checkedFromProp]);

  return (
    <CustomCheckbox
      type="checkbox"
      {...{ name, checked, disabled }}
      onClick={() => {
        if (disabled) {
          return;
        }

        toggleChecked(!checked);
      }}
      onChange={() => {
        if (handleChange) {
          handleChange(!checked);
        }
      }}
    />
  );
};

export default Checkbox;
