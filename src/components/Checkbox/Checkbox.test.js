import { render, screen } from '@testing-library/react';
import CountrySelect from './CountrySelect';
import userEvent from '@testing-library/user-event';

test('clicks input to toggle dropdown', async () => {
  render(<CountrySelect />);
  const countrySelect = screen.getByPlaceholderText('Select your country');

  userEvent.click(countrySelect);
  const dropdownContent = screen.getByTestId('dropdown-content');
  expect(dropdownContent).toBeInTheDocument();

  userEvent.click(countrySelect);
  expect(dropdownContent).not.toBeInTheDocument();
});

test('clicks outside input to close dropdown', () => {
  render(<CountrySelect />);
  const countrySelect = screen.getByPlaceholderText('Select your country');

  userEvent.click(countrySelect);
  const dropdownContent = screen.getByTestId('dropdown-content');
  expect(dropdownContent).toBeInTheDocument();

  userEvent.click(document.body);
  expect(dropdownContent).not.toBeInTheDocument();
});

// test('selects country from dropdown', () => {
//   render(<CountrySelect />);
//   const countrySelect = screen.getByPlaceholderText('Select your country');

//   userEvent.click(countrySelect);
//   const dropdownContent = screen.getByTestId('dropdown-content');
//   expect(dropdownContent).toBeInTheDocument();

//   const australia = screen.getByText('Australia');
//   userEvent.click(australia);
//   expect(countrySelect).toHaveValue('Australia');
//   expect(dropdownContent).not.toBeInTheDocument();
// });

// test('searches for country in dropdown', () => {
//   render(<CountrySelect />);
//   const countrySelect = screen.getByPlaceholderText('Select your country');

//   userEvent.type(countrySelect, 'Austral');
//   expect(countrySelect).toHaveValue('Austral');
//   const dropdownContent = screen.getByTestId('dropdown-content');
//   const australia = screen.getByText('Australia');
//   expect(dropdownContent).toContainElement(australia);

//   userEvent.click(australia);
//   expect(countrySelect).toHaveValue('Australia');
//   expect(dropdownContent).not.toBeInTheDocument();
// });
