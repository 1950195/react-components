import React from 'react';
import Button from './Button';

const App: React.FC = () => {
  return (
    <div>
        <div className="m-2"><Button>DEFAULT</Button></div>
        <div className="m-2"><Button disabled>DEFAULT</Button></div>
        <div className="m-2"><Button type="primary">PRIMARY</Button></div>
        <div className="m-2"><Button type="primary" disabled>PRIMARY</Button></div>
        <div className="m-2"><Button type="raised">RAISED</Button></div>
        <div className="m-2"><Button type="raised" disabled>RAISED</Button></div>
        <div className="m-2"><Button type="outlined">OUTLINED</Button></div>
        <div className="m-2"><Button type="outlined" disabled>OUTLINED</Button></div>
        <div className="m-2"><Button type="linking">LINK</Button></div>
        <div className="m-2"><Button type="linking" disabled>LINK</Button></div>
    </div>
  );
};

export default App;
