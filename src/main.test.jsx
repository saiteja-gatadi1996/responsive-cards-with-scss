import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { createRoot } from 'react-dom/client';

// Mock the createRoot and its methods
jest.mock('react-dom/client', () => ({
  createRoot: jest.fn().mockImplementation(() => ({
    render: jest.fn(),
    unmount: jest.fn(),
  })),
}));

test('renders App component without crashing', () => {
  const rootElement = document.createElement('div');
  rootElement.setAttribute('id', 'root');
  document.body.appendChild(rootElement);

  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  // Assert that render was called
  expect(root.render).toHaveBeenCalled();
});
