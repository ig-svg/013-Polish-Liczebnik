import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css'; // Исправлено: импортируем styles.css, так как файл в src называется именно так
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);