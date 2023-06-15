import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
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
test('DisplayQuote renders the quote of the day', async () => {
  render(
    <BrowserRouter>
      <Navbar />
      <DisplayQuote />
    </BrowserRouter>,
  );
  await waitForElementToBeRemoved(() =>
  screen.getByText('Loading wait a moment please...'),
  { timeout: 5000 } // Increase the timeout to 5 seconds
);

  const quoteText = await screen.findByText('Tired of math?');

  expect(quoteText).toBeInTheDocument();
});