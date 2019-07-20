import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Switch from '../Switch';

storiesOf('Switch', module)
  .add('All', () => [
    <Switch key="switch" onChange={action('changed')} />,
    <Switch key="switch-checked" checked onChange={action('changed')}  />,
    <Switch key="switch-disabled" disabled onChange={action('changed')} />,
    <Switch key="switch-checked-disabled" checked disabled onChange={action('changed')}  />,
  ])
  .add('default', () => <Switch onChange={action('changed')} />)
  .add('default [checked]', () => <Switch checked onChange={action('changed')} />)
  .add('default [disabled]', () => <Switch disabled onChange={action('changed')} />);
