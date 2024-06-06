// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders App component with initial content', () => {
//   render(<App />);
//   expect(screen.getByText('React App with SCSS')).toBeInTheDocument();
//   expect(
//     screen.getByText(
//       'This is a simple React application demonstrating various concepts.'
//     )
//   ).toBeInTheDocument();
//   expect(screen.getByText('React Tutorial for Beginners')).toBeInTheDocument();
// });
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component with initial content', () => {
  render(<App />);
  expect(screen.getByText('React App with SCSS')).toBeInTheDocument();
  expect(
    screen.getByText(
      'This is a simple React application demonstrating various concepts.'
    )
  ).toBeInTheDocument();
  expect(screen.getByText('React Tutorial for Beginners')).toBeInTheDocument();
});

test('renders all video titles', () => {
  render(<App />);
  const videoTitles = [
    'React Tutorial for Beginners',
    'Learn JavaScript in 1 Hour',
    'CSS Flexbox Tutorial',
    'Understanding CSS Grid',
    'Node.js Basics',
    'React Advanced Concepts',
    'GraphQL Tutorial',
    'TypeScript Basics',
    'Next.js Guide',
    'Redux for State Management',
    'Building REST APIs',
    'React Hooks in Depth',
    'JavaScript ES6 Features',
    'Sass for CSS Preprocessing',
    'React Router Tutorial',
    'Styled Components in React',
    'Webpack for Module Bundling',
    'Babel for JavaScript',
    'Node.js Event Loop',
    'Async/Await in JavaScript',
    'React Performance Optimization',
    'Unit Testing in JavaScript',
    'Cypress for End-to-End Testing',
    'Storybook for UI Development',
  ];

  videoTitles.forEach((title) => {
    expect(screen.getByText(title)).toBeInTheDocument();
  });
});
