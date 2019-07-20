import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from '../Input';

storiesOf('Input', module)
  .add('All', () => [
    <Input key="input" placeholder="First Name" />,
    <Input key="input" type="password" placeholder="Enter password" />,
  ])
  .add('text', () => <Input placeholder="First Name" />)
  .add('password', () => <Input type="password" placeholder="Enter password" />);
