import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import { BrowserRouter } from 'react-router-dom'
import { RoutingApplication } from './routing-application'
import { MenuApplication } from './menu-application'

/** @todo Padrinizar erro */
/** @todo Padronizar mensagens */
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <MenuApplication/>
      <RoutingApplication/>
    </StrictMode>
  </BrowserRouter>
)
