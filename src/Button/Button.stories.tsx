import React from 'react';

import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import Button from '../Button';

storiesOf('Button', module)
  .add('default', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('default [disabled]', () => <Button disabled onClick={action('clicked')}>Hello Button</Button>)
  .add('primary', () => <Button type="primary" onClick={action('clicked')}>Hello Button</Button>)
  .add('primary [disabled]', () => <Button type="primary" disabled onClick={action('clicked')}>Hello Button</Button>)
  .add('raised', () => <Button type="raised" onClick={action('clicked')}>Hello Button</Button>)
  .add('raised [disabled]', () => <Button type="raised" disabled onClick={action('clicked')}>Hello Button</Button>)
  .add('outlined', () => <Button type="outlined" onClick={action('clicked')}>Hello Button</Button>)
  .add('outlined [disabled]', () => <Button type="outlined" disabled onClick={action('clicked')}>Hello Button</Button>)
  .add('linking', () => <Button type="linking" onClick={action('clicked')}>Hello Button</Button>)
  .add('linking [disabled]', () => <Button type="linking" disabled onClick={action('clicked')}>Hello Button</Button>);
