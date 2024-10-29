import { render, screen } from '@testing-library/react';
import CheckboxListItem from './CheckboxListItem';
import userEvent from '@testing-library/user-event';

test('selects list item', () => {
  render(<CheckboxListItem value='test' />);
  const checkboxListItem = screen.getByTestId('checkbox-list-item');
  const input = screen.getByDisplayValue('test');
  expect(input).not.toBeChecked();
  userEvent.click(checkboxListItem);
  expect(input).toBeChecked();
});
