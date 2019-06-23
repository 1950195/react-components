import React from 'react';
import Button from './Button';

const App: React.FC = () => {
  return (
    <div>
        <div className="m-2"><Button>DEFAULT</Button></div>
        <div className="m-2"><Button disabled>DEFAULT</Button></div>
        <div className="m-2"><Button primary>PRIMARY</Button></div>
        <div className="m-2"><Button primary disabled>PRIMARY</Button></div>
        <div className="m-2"><Button raised>RAISED</Button></div>
        <div className="m-2"><Button raised disabled>RAISED</Button></div>
        <div className="m-2"><Button outlined>OUTLINED</Button></div>
        <div className="m-2"><Button outlined disabled>OUTLINED</Button></div>
        <div className="m-2"><Button linking>LINK</Button></div>
        <div className="m-2"><Button linking disabled>LINK</Button></div>
    </div>
  );
};

export default App;
