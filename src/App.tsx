import React from 'react';
import Button from './Button'

const App: React.FC = () => {
  return (
    <div>
        <div className="m-2"><Button>DEFAULT</Button></div>
        <div className="m-2"><Button disabled>DISABLED</Button></div>
        <div className="m-2"><Button primary>PRIMARY</Button></div>
        <div className="m-2"><Button primary disabled>DISABLED</Button></div>
        <div className="m-2"><Button raised>RAISED</Button></div>
        <div className="m-2"><Button raised disabled>DISABLED</Button></div>
        <div className="m-2"><Button outlined>OUTLINED</Button></div>
        <div className="m-2"><Button outlined disabled>DISABLED</Button></div>
        <div className="m-2"><Button linking>LINK</Button></div>
        <div className="m-2"><Button linking disabled>DISABLED</Button></div>
    </div>
  );
}

export default App;
