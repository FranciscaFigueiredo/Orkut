import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import GlobalStyle from './styles/GlobalStyle';

import { Home } from './pages/Home';
import { Login } from './pages/Login';
import SignUp from './pages/SignUp';
import { UserProfile } from './pages/UserProfile';

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <AuthProvider>
                <Routes>
                    <Route path="/" element={ <Login /> } />
                    <Route path="/sign-up" element={ <SignUp /> } />
                    <Route path="/home" element={ <Home /> } />
                    <Route path="/users/:id" element={ <UserProfile /> } />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}
