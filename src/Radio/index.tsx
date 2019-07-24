import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Input } from 'reactstrap';
import v from 'style/v';

const circleSvg = encodeURIComponent(`
  <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <circle fill="#fff" cx="8" cy="8" r="2.5" />
  </svg>
`);

const CustomRadio = styled(Input)`
  position: relative;
  margin-left: 0;
  display: inline-block;
  height: 16px;
  width: 16px;
  overflow: hidden;
  appearance: none;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  transition: background-color .2s ease-in-out;
  border: 1px solid ${v('$grayscale-silverlight')};
  border-radius: 50%;
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
    background-image: url(data:image/svg+xml;charset=UTF-8,${circleSvg});
  `}
`;

export interface IRadioProps {
  name: string;
  checked?: boolean;
  disabled?: boolean;
  handleChange?: (checked: boolean) => void;
}

export const Radio = ({
  name,
  checked: checkedFromProp,
  disabled,
  handleChange,
}: IRadioProps) => {
  const [checked, toggleChecked] = useState(checkedFromProp);

  useEffect(() => {
    toggleChecked(checkedFromProp);
  }, [checkedFromProp]);

  return (
    <CustomRadio
      type="radio"
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

export default Radio;
