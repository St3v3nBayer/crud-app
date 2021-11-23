import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import User from './Product';

describe('<User />', () => {
  test('it should mount', () => {
    render(<User />);
    
    const user = screen.getByTestId('User');

    expect(user).toBeInTheDocument();
  });
});