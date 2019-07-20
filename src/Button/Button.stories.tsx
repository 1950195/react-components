import React from 'react';

import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import Button from '../Button';

storiesOf('Button', module)
  .add('All', () => [
    <Button key="primary" color="primary" onClick={action('clicked')}>Primary</Button>,
    <Button key="default" onClick={action('clicked')}>Default</Button>,
    <Button key="link" color="link" onClick={action('clicked')}>Link</Button>,
    <Button key="disabled" disabled onClick={action('clicked')}>Disabled</Button>,
  ])
  .add('primary', () => <Button color="primary" onClick={action('clicked')}>Hello Button</Button>)
  .add('primary [disabled]', () => <Button color="primary" disabled onClick={action('clicked')}>Hello Button</Button>)
  .add('default', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('default [disabled]', () => <Button disabled onClick={action('clicked')}>Hello Button</Button>)
  .add('link', () => <Button color="link" onClick={action('clicked')}>Hello Button</Button>)
  .add('link [disabled]', () => <Button color="link" disabled onClick={action('clicked')}>Hello Button</Button>);
