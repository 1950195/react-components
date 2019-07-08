import React from 'react';
import { Alert as BSAlert } from 'reactstrap';
import styled from 'styled-components';
import v, { rgba } from 'style/v';
import Icon from 'Icon';

const CustomAlert = styled(BSAlert)`
  white-space: nowrap;
  font-family: ${v('$font-family-roboto')};
  color: ${v('$grayscale-nero')};

  &.alert {
    &-success {
      border: 1px solid ${v('$control-kaiju')};
      background: ${rgba('$control-kaiju', .15)};
    }
    &-danger {
      border: 1px solid ${v('$primary-alizarin')};
      background: ${rgba('$primary-alizarin', .15)};
    }
    &-info {
      border: 1px solid ${v('$control-pacific')};
      background: ${rgba('$control-pacific', .15)};
    }
    &-warning {
      border: 1px solid ${v('$primary-lucis')};
      background: ${rgba('$primary-lucis', .15)};
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
}: IAlertProps) => {
  let colorProp: string = color;
  let iconColor;

  switch (color) {
    case 'success':
      iconColor = v('$control-kaiju');
      break;
    case 'error':
      colorProp = 'danger';
      iconColor = v('$primary-alizarin');
      break;
    case 'info':
      iconColor = v('$control-pacific');
      break;
    case 'warning':
      iconColor = v('$primary-lucis');
      break;
    default:
  }

  return (
    <CustomAlert
      {...{
        color: colorProp,
        fade,
      }}
    >
      <IconWrapper>
        <Icon name={color === 'warning' ? 'exclamation-triangle' : 'info-circle'} color={iconColor} />
      </IconWrapper>
      {children}
    </CustomAlert>
  );
};

export default Alert;
