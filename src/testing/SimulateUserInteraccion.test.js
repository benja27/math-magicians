import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Calculator from '../components/calculator';
import DisplayQuote from '../components/displayQuote';

// HOME TEST
test('test if home is displayed correctly when user clicks on home button', () => {
  render(
    <BrowserRouter>
      <Navbar />
      <Home />
    </BrowserRouter>,
  );

  expect(screen.getByText('Welcome to our page')).toBeInTheDocument();
});

// CALCULATOR TEST
test('test if calculator is displayed correctly when user clicks on home calculator', () => {
  render(
    <BrowserRouter>
      <Navbar />
      <Calculator />
    </BrowserRouter>,
  );

  expect(screen.getByText('Lets do some Math!')).toBeInTheDocument();
});

// QUOTE TEST
test('test if Quote is displayed correctly when user clicks on Quote button', () => {
  render(
    <BrowserRouter>
      <Navbar />
      <DisplayQuote />
    </BrowserRouter>,
  );

  expect(screen.getByText('Tired of math?')).toBeInTheDocument();
});
