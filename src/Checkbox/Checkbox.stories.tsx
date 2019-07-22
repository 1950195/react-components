import React from 'react';
import { storiesOf } from '@storybook/react';

import Checkbox from '../Checkbox';

storiesOf('Checkbox', module)
  .add('All', () => [
    <Checkbox key="checkbox" />,
    <Checkbox key="checkbox-checked" checked  />,
    <Checkbox key="checkbox-disabled" disabled />,
  ])
  .add('default', () => <Checkbox />)
  .add('default [checked]', () => <Checkbox checked />)
  .add('default [disabled]', () => <Checkbox disabled />);
