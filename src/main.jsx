import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { LoginStatusProvider } from './contexts/LoginStatusContext.jsx'
import { UserDetailsProvider } from './contexts/UserDetailContext.jsx'

createRoot(document.getElementById('root')).render(
    <LoginStatusProvider>
        <UserDetailsProvider>
        <App />
        </UserDetailsProvider>
    </LoginStatusProvider>
)
