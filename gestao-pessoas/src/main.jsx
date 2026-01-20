import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/colors.css'
import './styles/fonts.css'

import './index.css'
import App from './App.jsx'
import Helper from './components/Modals/Helper.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
