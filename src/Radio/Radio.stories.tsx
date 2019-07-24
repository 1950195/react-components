import React from 'react';
import { storiesOf } from '@storybook/react';

import Radio from '../Radio';

storiesOf('Radio', module)
  .add('All', () => [
    <Radio key="radio" name="test" />,
    <Radio key="radio-checked" name="test" checked  />,
    <Radio key="radio-disabled" name="test" disabled />,
  ])
  .add('default', () => <Radio name="test" />)
  .add('default [checked]', () => <Radio name="test" checked />)
  .add('default [disabled]', () => <Radio name="test" disabled />);
