import React from 'react';
import { render, screen } from '@testing-library/react';
import Weather from './Weather';
import renderer from 'react-test-renderer';

test('renders learn react link', () => {
  render(<Weather />);
});


//snapshot testings
test('Weather Component snapshot', () => {
  const tree = renderer.create(<Weather></Weather>).toJSON();
  expect(tree).toMatchSnapshot()
})