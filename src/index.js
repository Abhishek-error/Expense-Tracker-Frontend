import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from "react-dom/client"
import App from './App';

const rootElement = document.getElementById('root');

// Use createRoot instead of ReactDOM.render
const root = createRoot(rootElement);
root.render(<App />);
