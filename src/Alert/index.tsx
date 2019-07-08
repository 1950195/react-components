import React from 'react';
import { Alert as BSAlert } from 'reactstrap';
import styled from 'styled-components';
import v, { rgba } from 'style/v';

const CustomAlert = styled(BSAlert)`
  white-space: nowrap;
  font-family: ${v('$font-family-roboto')};
  color: ${v('$grayscale-nero')};

  &.alert {
    &-success {
      background: ${rgba('$control-kaiju', .15)};
    }
  }
`;

export interface IAlertProps {
  /**
   * color for alert
   *
   * @default 'success'
   */
  color?: 'success' | 'error' | 'warning' | 'info';
  /**
   * fade in / out
   *
   * @default true
   */
  fade?: boolean;
  children: any;
}

export const Alert = ({
  color = 'success',
  fade,
  children,
}: IAlertProps) => {
  let colorProp;

  switch (color) {
    case 'error':
      colorProp = 'danger';
      break;
    default:
      colorProp = color;
  }

  return (
    <CustomAlert
      {...{
        color: colorProp,
        fade,
      }}
    >
      {children}
    </CustomAlert>
  );
};

export default Alert;
