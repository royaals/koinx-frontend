
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { TrendProvider } from "./context/trend.tsx";

createRoot(document.getElementById('root')!).render(
 
  <TrendProvider>
    <App />
  </TrendProvider>

)
