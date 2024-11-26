
// Test: Greeting.test.tsx
import React, {act} from 'react';
import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';


describe('Greeting Component', () => {
  test('renders the correct greeting message', () => {
    render(<Greeting  name="John" />); 

    // Assert that the greeting message is displayed
    expect(screen.getByText('Hello, John!')).toBeInTheDocument();
  });
});