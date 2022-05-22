import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Biography } from '../components/Biography';
import { Friends } from '../components/Friends/Friends';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { useAuth } from '../hooks/useAuth';
import { getUserProfileById } from '../services/orkut';

import { ContentContainer, PageContainer } from '../styles/ContainerStyle';
import { SocialContainer } from '../styles/SocialStyle';

interface UserData {
    id: number;
    username: string;
    avatar: string;
    subtitle?: string;
    email: string;
    token: string;
}

export function UserProfile() {
    const navigate = useNavigate();

    const { id } = useParams()

    const { username, avatar, token } = useAuth();

    const [userData, setUserData] = useState<UserData>({
        id: 0,
        username: '',
        avatar: '',
        subtitle: '',
        email: '',
        token: '',
    });

    useEffect(() => {
        getUserProfileById(token, Number(id))
            .then((res) => setUserData(res.data))
            .catch(() => console.error());
    }, []);

    return (
        <PageContainer>
            <Header username={ username } avatar={ avatar } />
            <ContentContainer>
                <Sidebar username={ userData?.username } avatar={ userData?.avatar } />
                <Biography />
                <SocialContainer>
                    <Friends token={ token } id={ Number(id) } />
                </SocialContainer>
            </ContentContainer>
        </PageContainer>
    );
}
