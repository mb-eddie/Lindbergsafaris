import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'
import { AppErrorBoundary } from './components/common/ErrorBoundary'
import { initializeAnalytics } from './utils/analytics'
import { registerServiceWorker } from './utils/registerSW'

// Initialize analytics
initializeAnalytics();

// Register service worker
registerServiceWorker();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppErrorBoundary>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </AppErrorBoundary>
  </React.StrictMode>,
)