import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary'

console.log('main.jsx loaded')

// Global handlers to surface errors that would otherwise be hidden
window.addEventListener('error', (e) => {
  console.error('window error', e.error || e.message || e)
})

window.addEventListener('unhandledrejection', (e) => {
  console.error('unhandledrejection', e.reason || e)
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
