import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');

if (container.hasChildNodes()) {
  // Pre-rendered HTML exists — hydrate it (for Google/SEO)
  hydrateRoot(container, <App />);
} else {
  // Normal load for users
  const root = createRoot(container);
  root.render(<App />);
}

reportWebVitals();