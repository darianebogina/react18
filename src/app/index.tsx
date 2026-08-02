import { createRoot } from 'react-dom/client'
import { SearchDemoPage } from '@/pages/search-demo'
import '@/index.css'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <SearchDemoPage />
  // </StrictMode>,
)
