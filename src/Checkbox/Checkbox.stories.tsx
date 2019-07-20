import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Checkbox from '../Checkbox';

storiesOf('Checkbox', module)
  .add('All', () => [
    <Checkbox key="checkbox" onChange={action('changed')} />,
    <Checkbox key="checkbox-checked" checked onChange={action('changed')}  />,
    <Checkbox key="checkbox-disabled" disabled onChange={action('changed')} />,
  ])
  .add('default', () => <Checkbox onChange={action('changed')} />)
  .add('default [checked]', () => <Checkbox checked onChange={action('changed')} />)
  .add('default [disabled]', () => <Checkbox disabled onChange={action('changed')} />);
