import React, { Fragment } from 'react';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import GlobalStyle from 'style/GlobalStyle';
import Table from '../src/Table';

const TableComponent = ({ propDefinitions }) => {
  const dataSource = propDefinitions.map(({ property, propType, required, description, defaultValue }) =>
    ({ property, type: propType.name, required: required ? 'YES' : '-', defaultValue, description }));

  const columns = [
    { title: 'name', key: 'property' },
    { title: 'type', key: 'type' },
    { title: 'required', key: 'required' },
    { title: 'default', key: 'defaultValue' },
    { title: 'description', key: 'description' },
  ];

  return <Table striped bordered dataSource={dataSource} columns={columns} />;
};

// automatically import all files ending in *.stories.tsx
const rootReq = require.context('../stories', true, /\.stories\.tsx$/);
const srcReq = require.context('../src', true, /\.stories\.tsx$/);

function loadStories() {
  rootReq.keys().forEach(rootReq);
  srcReq.keys().forEach(srcReq);
}

const GlobalStyleDecorator = (storyFn) => <Fragment><GlobalStyle />{storyFn()}</Fragment>;

addDecorator(withInfo({ inline: true, TableComponent }));
addDecorator(GlobalStyleDecorator);
addParameters({ options: { showPanel: false } });
configure(loadStories, module);
