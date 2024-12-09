import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {FacturaApp} from './Components/FacturaApp'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  // el strict mode es solo para ambiente desarrollo
  // para produccion no es necesario y se debe quitar o comentar
  <StrictMode>
    <FacturaApp />
  </StrictMode>,
)
