/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import { createContext, ReactNode, useState } from 'react';

interface IAuthContext {
    id?: number | null;
    username: string | null;
    avatar: string | null;
    subtitle: string | null;
    email: string | null;
    token: string | null;
    login: (user: any) => void;
    logout: () => void;
}

type UserData = Omit<IAuthContext, 'login' | 'logout'>;

export const AuthContext = createContext<IAuthContext | null>(null);

interface Props {
    children: ReactNode;
}

const LOCAL_STORAGE_KEY = 'orkut-user';
const persistedUserData = localStorage.getItem(LOCAL_STORAGE_KEY);

export function AuthProvider({ children }: Props) {
    const noUser: UserData = {
        id: null,
        username: '',
        avatar: '',
        subtitle: '',
        email: '',
        token: '',
    };

    const [userData, setUserData] = useState(() => (persistedUserData ? JSON.parse(persistedUserData) : null));

    function login(user: UserData) {
        setUserData(user);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(user));
    }

    function logout() {
        setUserData(noUser);
        localStorage.clear();
    }

    return (
        <AuthContext.Provider value={ {
            id: userData?.id,
            username: userData?.username,
            avatar: userData?.avatar,
            subtitle: userData?.subtitle,
            email: userData?.email,
            token: userData?.token,
            login,
            logout,
        } }
        >
            {children}
        </AuthContext.Provider>
    );
}
