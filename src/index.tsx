import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/reset.scss'
import './styles/variables.scss'
import { App } from './components'

const root = createRoot(document.getElementById('root')!)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
