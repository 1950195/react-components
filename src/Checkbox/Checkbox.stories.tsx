import React from 'react';
import { storiesOf } from '@storybook/react';

import Checkbox from '../Checkbox';

storiesOf('Checkbox', module)
  .add('All', () => [
    <Checkbox key="checkbox" name="test" />,
    <Checkbox key="checkbox-checked" name="test" checked  />,
    <Checkbox key="checkbox-disabled" name="test" disabled />,
  ])
  .add('default', () => <Checkbox name="test" />)
  .add('default [checked]', () => <Checkbox name="test" checked />)
  .add('default [disabled]', () => <Checkbox name="test" disabled />);
