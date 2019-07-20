import React from 'react';
import { storiesOf } from '@storybook/react';

import SearchBox from '../SearchBox';

storiesOf('SearchBox', module)
  .add('All', () => [
    <SearchBox key="search" placeholder="Search For" />,
  ]);
