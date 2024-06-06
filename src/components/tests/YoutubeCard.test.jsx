import React from 'react';
import { render } from '@testing-library/react';
import YouTubeCard from '../YouTubeCard';

test('renders YouTube card with title and description', () => {
  const { getByText } = render(
    <YouTubeCard
      title='Sample Title'
      description='Sample Description'
      imageUrl='/image.png'
    />
  );
  expect(getByText('Sample Title')).toBeInTheDocument();
  expect(getByText('Sample Description')).toBeInTheDocument();
});
