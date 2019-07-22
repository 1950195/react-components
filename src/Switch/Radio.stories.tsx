import React from 'react';
import { storiesOf } from '@storybook/react';

import Switch from '../Switch';

storiesOf('Switch', module)
  .add('All', () => [
    <Switch key="switch" />,
    <Switch key="switch-checked" checked  />,
    <Switch key="switch-disabled" disabled />,
    <Switch key="switch-checked-disabled" checked disabled  />,
  ])
  .add('default', () => <Switch />)
  .add('default [checked]', () => <Switch checked />)
  .add('default [disabled]', () => <Switch disabled />);
