import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Mock the root element for testing
const rootElement = document.createElement('div');
document.body.appendChild(rootElement);

describe('App Component', () => {
  it('renders App component without crashing', () => {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  });
});
