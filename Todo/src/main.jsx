import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TodoDataProvider } from './contexts/TodoData.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoDataProvider>
    <App />
    </TodoDataProvider>
  </React.StrictMode>,
)
