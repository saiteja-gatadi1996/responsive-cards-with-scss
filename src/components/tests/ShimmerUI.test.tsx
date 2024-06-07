jest.mock('../../styles/ShimmerUI.module.scss', () => ({
  shimmerWrapper: 'shimmerWrapper',
  shimmer: 'shimmer',
}));

import { render } from '@testing-library/react';
import ShimmerUI from '../ShimmerUI';
import styles from '../../styles/ShimmerUI.module.scss';

test('renders shimmer correctly', () => {
  console.log('Mocked styles:', styles); // Check if styles are mocked

  const { container } = render(<ShimmerUI />);
  console.log('styles.shimmerWrapper', styles.shimmerWrapper); // Debugging line

  expect(container.firstChild).toHaveClass(styles.shimmerWrapper);
  expect(container.querySelector(`.${styles.shimmer}`)).toBeInTheDocument();
});
