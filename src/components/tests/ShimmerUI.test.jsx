import React from 'react';
import { render } from '@testing-library/react';
import ShimmerUI from '../ShimmerUI';

test('renders shimmer correctly', () => {
  const { container } = render(<ShimmerUI />);
  expect(container.firstChild).toHaveClass('shimmerWrapper');
  expect(container.querySelector('.shimmer')).toBeInTheDocument();
});
