import { createContext, ReactNode, useState } from 'react';

interface IAuthContext {
    id?: number | null;
    username: string | null;
    avatar: string | null;
    subtitle: string | null;
    email: string | null;
    token: string | null;
    login: (user: UserData) => void;
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
    const [userData, setUserData] = useState<UserData>(persistedUserData);

    function login(user: UserData) {
        console.log(user);

        setUserData(user);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(user));
    }

    function logout() {
        console.log(' logout');

        setUserData(null);
        localStorage.clear();
    }

    return (
        <AuthContext.Provider value={{
            id: userData?.id,
            username: userData?.username,
            avatar: userData?.avatar,
            subtitle: userData?.subtitle,
            email: userData?.email,
            token: userData?.token,
            login,
            logout,
        }}
        >
            {children}
        </AuthContext.Provider>
    );
}
