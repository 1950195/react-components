import React from 'react';
import { storiesOf } from '@storybook/react';

import Radio from '../Radio';

storiesOf('Radio', module)
  .add('All', () => [
    <Radio key="radio" />,
    <Radio key="radio-checked" checked  />,
    <Radio key="radio-disabled" disabled />,
  ])
  .add('default', () => <Radio />)
  .add('default [checked]', () => <Radio checked />)
  .add('default [disabled]', () => <Radio disabled />);
