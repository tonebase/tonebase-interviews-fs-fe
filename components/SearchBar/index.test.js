import React from 'react';
import { render, screen } from '@testing-library/react'
import SearchBar from './SearchBar';

const searchBarProps = {
  searchSuggestions: ['a', 'b', 'c'],
  onHandleChange: () => console.log('change'),
  search: 'a'
};

test('It should render suggestions when passed suggestions array prop that is not empty.', async () => {
  render(<SearchBar
    {...searchBarProps}
  />)
  const suggestions = await screen.getByTestId('suggestions');
  expect(suggestions).toBeInTheDocument();
});