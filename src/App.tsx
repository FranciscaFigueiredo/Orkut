import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AuthProvider } from "./contexts/AuthContext";
import GlobalStyle from "./styles/GlobalStyle";

import { Home } from './pages/Home';

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <AuthProvider>
                <Routes>
                    {/* <Route path="/" element={<Login user={ user } setUser={ setUser } setToken={ setToken } />} />
                    <Route path="/sign-up" element={<SignUp />} /> */}
                    <Route path="/" element={<Home />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}
