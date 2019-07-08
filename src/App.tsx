import React from 'react';
import Alert from 'Alert';
import Icon from 'Icon';

const App: React.FC = () => {
  return (
    <div>
        <div className="m-2">
          <Icon name="info-circle" />
          <Alert color="success">Saved Successfull</Alert>
          <Alert color="error">Private key, or Keystore password, or both are invalid</Alert>
          <Alert color="info">All alerts have been disabled, Alerts can be re-enabled below.</Alert>
          <Alert color="warning">All Alerts have been disabled. Alerts can be re-enabled below</Alert>
        </div>
    </div>
  );
};

export default App;
