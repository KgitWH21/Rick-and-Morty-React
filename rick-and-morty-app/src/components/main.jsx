import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* RouterProvider connects the route configuration to the React app. */}
    <RouterProvider router={router} />
  </StrictMode>,
)
