import React from 'react';
import { Alert as BSAlert } from 'reactstrap';
import styled from 'styled-components';
import v, { rgba } from 'style/v';
import Icon from 'Icon';

const getStyle = (color: string) => `
  border: 1px solid ${v(color)};
  background: ${rgba(color, .15)};
  > span svg {
    color: ${v(color)};
  }
`;

const CustomAlert = styled(BSAlert)`
  font-family: ${v('$font-family-roboto')};
  color: ${v('$grayscale-nero')};
  border-radius: 0;

  &.alert {
    &-success {
      ${getStyle('$control-kaiju')};
    }
    &-danger {
      ${getStyle('$primary-alizarin')};
    }
    &-info {
      ${getStyle('$control-pacific')};
    }
    &-warning {
      ${getStyle('$primary-lucis')};
    }
  }
`;

const IconWrapper = styled.span`
  padding-right: .5rem;
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
}: IAlertProps) => (
  <CustomAlert
    {...{
      color: color === 'error' ? 'danger' : color,
      fade,
    }}
  >
    <IconWrapper>
      <Icon name={color === 'warning' ? 'exclamation-triangle' : 'info-circle'} />
    </IconWrapper>
    {children}
  </CustomAlert>
);

export default Alert;
