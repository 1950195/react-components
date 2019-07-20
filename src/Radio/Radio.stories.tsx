import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Radio from '../Radio';

storiesOf('Radio', module)
  .add('All', () => [
    <Radio key="radio" onChange={action('changed')} />,
    <Radio key="radio-checked" checked onChange={action('changed')}  />,
    <Radio key="radio-disabled" disabled onChange={action('changed')} />,
  ])
  .add('default', () => <Radio onChange={action('changed')} />)
  .add('default [checked]', () => <Radio checked onChange={action('changed')} />)
  .add('default [disabled]', () => <Radio disabled onChange={action('changed')} />);
