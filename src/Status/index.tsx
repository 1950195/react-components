import React from 'react';
import { Badge } from 'reactstrap';
import styled from 'styled-components';

import v from 'style/v';

const getStyle = (type: string, outline?: boolean) => {
  let color;

  switch (type) {
    case 'active':
      color = v('$control-kaiju');
      break;
    case 'sent':
      color = v('$grayscale-gunmetal');
      break;
    case 'stopped':
      color = v('$primary-alizarin');
      break;
    default:
      return '';
  }

  return `
    &.badge-${type} {
      background-color: ${outline ? v('$grayscale-white') : color};
      color: ${!outline ? v('$grayscale-white') : color};
      border: 2px solid ${color};
    }
  `;
};

const CustomStatus = styled(Badge)`
  border-radius: 0;
  width: 4.5rem;
  height: 1.5rem;
  font-family: ${v('$font-family-roboto')};
  ${({ color, outline }) => getStyle(color, outline)}
`;

export interface IStatusProps {
  type: 'active' | 'sent' | 'stopped';
  outline?: boolean;
  children: any;
}

export const Status = ({
  type,
  outline,
  children,
}: IStatusProps) => {
  return (
    <CustomStatus
      {...{
        color: type,
        outline,
      }}
    >
      {children}
    </CustomStatus>
  );
};

export default Status;
