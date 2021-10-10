import React from 'react';
import { render, screen } from '@testing-library/react';
import Tempture from './Tempture';
import renderer from 'react-test-renderer';

test('renders learn react link', () => {
  render(<Tempture />);
});


//snapshot testings
test('APP Component snapshot', () => {
  const tree = renderer.create(<Tempture></Tempture>).toJSON();
  expect(tree).toMatchSnapshot()
})