import React, {Fragment} from 'react';

import { action } from '@storybook/addon-actions';
import { addDecorator, storiesOf } from '@storybook/react';
// import { linkTo } from '@storybook/addon-links';
import GlobalStyle from '../src/GlobalStyle';

import Button from '../src/Button';

const GlobalStyleDecorator = (storyFn: any) => (
  <Fragment>
    <GlobalStyle />
    {storyFn()}
  </Fragment>
);

addDecorator(GlobalStyleDecorator);

storiesOf('Button', module)
  .add('default', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('default [disabled]', () => <Button disabled onClick={action('clicked')}>Hello Button</Button>)
  .add('primary', () => <Button primary onClick={action('clicked')}>Hello Button</Button>)
  .add('primary [disabled]', () => <Button primary disabled onClick={action('clicked')}>Hello Button</Button>)
  .add('raised', () => <Button raised onClick={action('clicked')}>Hello Button</Button>)
  .add('raised [disabled]', () => <Button raised disabled onClick={action('clicked')}>Hello Button</Button>)
  .add('outlined', () => <Button outlined onClick={action('clicked')}>Hello Button</Button>)
  .add('outlined [disabled]', () => <Button outlined disabled onClick={action('clicked')}>Hello Button</Button>)
  .add('linking', () => <Button linking onClick={action('clicked')}>Hello Button</Button>)
  .add('linking [disabled]', () => <Button linking disabled onClick={action('clicked')}>Hello Button</Button>);
