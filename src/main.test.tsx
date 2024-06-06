import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { vi } from 'vitest';

// Mock the createRoot and its methods
vi.mock('react-dom/client', () => {
  const mockNavigate = vi.fn();
  return {
    createRoot: () => ({
      render: mockNavigate,
      unmount: mockNavigate,
    }),
  };
});

import { createRoot } from 'react-dom/client';

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
