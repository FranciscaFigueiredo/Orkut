import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Biography } from '../components/Biography';
import { Friends } from '../components/Friends';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { useAuth } from '../hooks/useAuth';
import { getUserProfile } from '../services/orkut';

import { ContentContainer, PageContainer } from '../styles/ContainerStyle';
import { SocialContainer } from '../styles/SocialStyle';

interface UserData {
    id: number;
    username: string;
    avatar: string;
    subtitle: string;
    email: string;
    token: string;
}

export function Home() {
    const navigate = useNavigate();

    // const user = JSON.parse(`${sessionStorage.getItem('user')}`);
    const { token } = useAuth();

    const [userData, setUserData] = useState<UserData | {}>({});

    useEffect(() => {
        if (!token) {
            navigate('/');
        }

        getUserProfile(token)
            .then((res) => setUserData(res.data))
            .catch(() => console.error());
    }, []);

    console.log(userData);

    return (
        <PageContainer>
            <Header username={ userData?.username } avatar={ userData?.avatar } />
            <ContentContainer>
                <Sidebar username={ userData?.username } avatar={ userData?.avatar } />
                <Biography />
                <SocialContainer>
                    <Friends />
                </SocialContainer>
            </ContentContainer>
        </PageContainer>
    );
}
