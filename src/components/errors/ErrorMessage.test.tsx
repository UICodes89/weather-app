import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorMessage from './ErrorMessage';
import renderer from 'react-test-renderer';

test('renders learn react link', () => {
  render(<ErrorMessage />);
});
