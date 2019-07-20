import React from 'react';

import { storiesOf } from '@storybook/react';

import Alert from '../Alert';

storiesOf('Alert', module)
    .add('All', () => [
        <Alert key="success" color="success">Saved Successfull</Alert>,
        <Alert key="error" color="error">Private key, or Keystore password, or both are invalid</Alert>,
        <Alert key="info" color="info">All alerts have been disabled, Alerts can be re-enabled below.</Alert>,
        <Alert key="warning" color="warning">All Alerts have been disabled. Alerts can be re-enabled below</Alert>,
    ])
    .add('Success', () => <Alert color="success">Saved Successfull</Alert>)
    .add('Error', () => <Alert color="error">Private key, or Keystore password, or both are invalid</Alert>)
    .add('Info', () => <Alert color="info">All alerts have been disabled, Alerts can be re-enabled below.</Alert>)
    .add('Warning', () => <Alert color="warning">All Alerts have been disabled. Alerts can be re-enabled below</Alert>);
