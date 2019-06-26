import React from 'react';

import { storiesOf } from '@storybook/react';

import Table from '../Table';

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

storiesOf('Table', module)
  .add('default', () => <Table dataSource={defaultDataSource} columns={defaultColumns} />)
  .add('striped', () => <Table striped dataSource={defaultDataSource} columns={defaultColumns} />)
  .add('bordered', () => <Table bordered dataSource={defaultDataSource} columns={defaultColumns} />)
  .add('striped & bordered', () => <Table striped bordered dataSource={defaultDataSource} columns={defaultColumns} />);
