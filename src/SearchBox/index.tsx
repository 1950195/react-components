import React from 'react';
import styled from 'styled-components';

import Input from 'Input';
import Button from 'Button';
import Icon from 'Icon';

const Wrapper = styled.div`
  display: flex;
  height: 2.5rem;
  > input[type=text] {
    width: 10rem;
  }
  > button {
    margin-left: .25rem;
    font-size: .875rem;
  }
`;

export interface ISearchBoxProps {
  disabled?: boolean;
  placeholder?: string;
}

export const SearchBox = ({
  disabled,
  placeholder,
}: ISearchBoxProps) => {
  return (
    <Wrapper>
      <Input {...{ disabled, placeholder }} />
      <Button>
        <Icon name="search" />
      </Button>
    </Wrapper>
  );
};

export default SearchBox;
