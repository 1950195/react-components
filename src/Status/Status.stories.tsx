import React from 'react';

import { storiesOf } from '@storybook/react';

import Status from '../Status';

storiesOf('Status', module)
  .add('All', () => [
    <Status key="active" type="active">Active</Status>,
    <Status key="active-outline" type="active" outline>Active</Status>,
    <Status key="sent" type="sent">Sent</Status>,
    <Status key="sent-outline" type="sent" outline>Sent</Status>,
    <Status key="stopped" type="stopped">Stopped</Status>,
    <Status key="stopped-outline" type="stopped" outline>Stopped</Status>,
  ])
  .add('active', () => <Status type="active">Active</Status>)
  .add('active [outline]', () => <Status type="active" outline>Active</Status>)
  .add('sent', () => <Status type="sent">Sent</Status>)
  .add('sent [outline]', () => <Status type="sent" outline>Sent</Status>)
  .add('stopped', () => <Status type="stopped">Stopped</Status>)
  .add('stopped [outline]', () => <Status type="stopped" outline>Stopped</Status>);
