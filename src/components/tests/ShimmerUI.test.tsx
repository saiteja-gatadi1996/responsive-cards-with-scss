import React from 'react';
import { render } from '@testing-library/react';
import ShimmerUI from '../ShimmerUI';
import styles from '../../styles/ShimmerUI.module.scss';

test('renders shimmer correctly', () => {
  const { container } = render(<ShimmerUI />);
  expect(container.firstChild).toHaveClass(styles.shimmerWrapper);
  expect(container.querySelector(`.${styles.shimmer}`)).toBeInTheDocument();
});
