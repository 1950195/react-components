import React, { Fragment } from 'react';
import { addDecorator, configure } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import GlobalStyle from '../src/GlobalStyle';

// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

const GlobalStyleDecorator = (storyFn) => <Fragment><GlobalStyle />{storyFn()}</Fragment>;

addDecorator(withInfo({ inline: true }));
addDecorator(GlobalStyleDecorator);
configure(loadStories, module);
