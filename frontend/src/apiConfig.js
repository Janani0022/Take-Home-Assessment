import React from 'react';

let apiUrl = 'http://localhost:5000';

// Use process.env for tests (Jest) and import.meta.env for Vite/browser
if (typeof process !== 'undefined' && process.env && process.env.VITE_API_URL) {
  apiUrl = process.env.VITE_API_URL;
}

const API = `${apiUrl}/api/tasks`;
export default API; 