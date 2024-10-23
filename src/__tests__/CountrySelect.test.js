import { render, screen, fireEvent } from '@testing-library/react';
import CountrySelect from '../components/CountrySelect';

test('clicks input to toggle dropdown', () => {
  render(<CountrySelect />);
  const countrySelect = screen.getByPlaceholderText('Select your country');

  fireEvent.click(countrySelect);
  const dropdownContent = screen.getByTestId('dropdown-content');
  expect(dropdownContent).toBeInTheDocument();

  fireEvent.click(countrySelect);
  expect(dropdownContent).not.toBeInTheDocument();
});

test('blurs input to close dropdown', () => {
  render(<CountrySelect />);
  const countrySelect = screen.getByPlaceholderText('Select your country');

  fireEvent.click(countrySelect);
  const dropdownContent = screen.getByTestId('dropdown-content');
  expect(dropdownContent).toBeInTheDocument();

  fireEvent.blur(countrySelect);
  expect(dropdownContent).not.toBeInTheDocument();
});

test('selects country from dropdown', () => {
  render(<CountrySelect />);
  const countrySelect = screen.getByPlaceholderText('Select your country');

  fireEvent.click(countrySelect);
  const dropdownContent = screen.getByTestId('dropdown-content');
  expect(dropdownContent).toBeInTheDocument();

  const australia = screen.getByText('Australia');
  fireEvent.mouseDown(australia);
  fireEvent.blur(countrySelect);
  expect(countrySelect).toHaveValue('Australia');
  expect(dropdownContent).not.toBeInTheDocument();
});
