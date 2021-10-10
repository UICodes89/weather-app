import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer';

test('renders learn react link', () => {
  render(<App />);
});


//snapshot testings
test('APP Component snapshot', () => {
  const tree = renderer.create(<App></App>).toJSON();
  expect(tree).toMatchSnapshot()
})