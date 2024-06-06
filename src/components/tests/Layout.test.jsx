import React from 'react';
import { render } from '@testing-library/react';
import Layout from '../Layout';

test('renders children correctly', () => {
  const { getByText } = render(
    <Layout>
      <div>Child Component</div>
    </Layout>
  );
  expect(getByText('Child Component')).toBeInTheDocument();
});
