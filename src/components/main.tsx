// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'modern-normalize'; // Додай цей рядок першим
import App from './components/App/App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)