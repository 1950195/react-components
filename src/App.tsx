import React from 'react';

import Button from './Button';
import Table from './Table';

const defaultDataSource = [
  { id: 1, name: 'a' },
  { id: 2, name: 'b' },
  { id: 3, name: 'c' },
  { id: 4, name: 'd' },
];

const defaultColumns = [
  { title: 'ID', key: 'id' },
  { title: 'Name', key: 'name' },
];

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
        <div className="m-2"><Table dataSource={defaultDataSource} columns={defaultColumns} /></div>
        <div className="m-2"><Table striped dataSource={defaultDataSource} columns={defaultColumns} /></div>
        <div className="m-2"><Table bordered dataSource={defaultDataSource} columns={defaultColumns} /></div>
        <div className="m-2"><Table striped bordered dataSource={defaultDataSource} columns={defaultColumns} /></div>
    </div>
  );
};

export default App;
