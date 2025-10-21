import '@fontsource/roboto-mono/400.css'
import '@fontsource/roboto-mono/600.css'
import '@fontsource-variable/inter'
import '@fontsource-variable/roboto-flex'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import './styles.scss'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
