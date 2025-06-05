import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { BrowserRouter, Routes, Route } from 'react-router-dom'  // <--- import ini
import Login from './login_google.jsx'
import Dashboard from './hero.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="620326734861-21o77o6mtt0j4v1eitj5g0bvm1m8htf4.apps.googleusercontent.com">
      <BrowserRouter>   {/* <--- bungkus komponen dengan BrowserRouter */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dasboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  </StrictMode>,
)
