import React from 'react';

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
        <div className="m-2"><Table striped bordered dataSource={defaultDataSource} columns={defaultColumns} /></div>
    </div>
  );
};

export default App;
