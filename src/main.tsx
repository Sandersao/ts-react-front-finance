import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SaidaGestao } from './application/saida-gestao'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SaidaGestao/>
  </StrictMode>,
)
