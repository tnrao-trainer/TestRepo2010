
// Test: Greeting.test.tsx
import React from 'react';
import { render, screen, act, fireEvent, waitFor } from '@testing-library/react';
import Greeting from './Greeting';


describe('Greeting Component', () => {
  test('renders the default greeting message', () => {
    const { container } = render(<Greeting />); 
    let  e1:Element|null   = container.querySelector('#x');
    expect(e1?.textContent).toEqual("");
  });


  test('renders the correct message in button click event', () => {
    const { container } = render(<Greeting />); 
    let  e1:Element|null   = container.querySelector('#x');
    fireEvent.click(screen.getByRole('button', { name: /Get data/i }));
    expect(e1?.textContent).toEqual("Welcome to ");
  });

  test('renders the correct message in button click event', async () => {
    const { container } = render(<Greeting />); 
    let  e1:Element|null   = container.querySelector('#x');
    let  e2:Element|null   = container.querySelector('#t1');

    fireEvent.change(e2!,  { target: { value: 'Narasimha' } });
    fireEvent.click(screen.getByRole('button', { name: /Get data/i }));

    await waitFor(() => expect(e1?.textContent).toEqual("Welcome to Narasimha"));
  });

});