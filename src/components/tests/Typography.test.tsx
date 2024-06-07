import { render } from '@testing-library/react';
import Typography from '../Typography';

test('renders the correct tag and children', () => {
  const { getByText } = render(<Typography variant='h1'>Heading 1</Typography>);
  expect(getByText('Heading 1').tagName).toBe('H1');
  expect(getByText('Heading 1')).toBeInTheDocument();
});
