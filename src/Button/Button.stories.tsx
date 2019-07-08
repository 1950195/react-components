import React from 'react';

import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import Button from '../Button';

storiesOf('Button', module)
  .add('default lg', () => <Button size="lg" onClick={action('clicked')}>Hello Button</Button>)
  .add('default sm', () => <Button size="sm" onClick={action('clicked')}>Hello Button</Button>)
  .add('default', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('default [disabled]', () => <Button disabled onClick={action('clicked')}>Hello Button</Button>)
  .add('primary', () => <Button color="primary" onClick={action('clicked')}>Hello Button</Button>)
  .add('primary [disabled]', () => <Button color="primary" disabled onClick={action('clicked')}>Hello Button</Button>)
  .add('linking', () => <Button color="linking" onClick={action('clicked')}>Hello Button</Button>)
  .add('linking [disabled]', () => <Button color="linking" disabled onClick={action('clicked')}>Hello Button</Button>)
  .add('dashed', () => <Button dashed onClick={action('clicked')}>Hello Button</Button>)
  .add('dashed [disabled]', () => <Button dashed disabled onClick={action('clicked')}>Hello Button</Button>)
  .add('raised', () => <Button color="raised" onClick={action('clicked')}>Hello Button</Button>)
  .add('raised [disabled]', () => <Button color="raised" disabled onClick={action('clicked')}>Hello Button</Button>)
  .add('outlined', () => <Button outlined onClick={action('clicked')}>Hello Button</Button>)
  .add('outlined [disabled]', () => <Button outlined disabled onClick={action('clicked')}>Hello Button</Button>)
  .add('outlined primary', () => <Button outlined color="primary" onClick={action('clicked')}>Hello Button</Button>);
