import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Biography } from '../components/Biography';
import { Friends } from '../components/Friends/Friends';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { useAuth } from '../hooks/useAuth';
import { getFriendship, getUserProfileById } from '../services/orkut';

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
    const { id } = useParams();

    const {
        id: userLogId,
        username,
        avatar,
        token,
    } = useAuth();

    const [userData, setUserData] = useState<UserData>({
        id: 0,
        username: '',
        avatar: '',
        subtitle: '',
        email: '',
        token: '',
    });

    const [friendship, setFriendship] = useState(false);

    useEffect(() => {
        getUserProfileById(token, Number(id))
            .then((res) => setUserData(res.data))
            .catch(() => console.error());

        getFriendship(token, Number(userLogId), Number(id))
            .then((res) => (res.data ? setFriendship(true) : setFriendship(false)))
            .catch(() => console.error());
    }, []);

    return (
        <PageContainer>
            <Header username={ username } avatar={ avatar } />
            <ContentContainer>
                <Sidebar
                    friendship={ friendship }
                    username={ userData?.username }
                    avatar={ userData?.avatar }
                />
                <Biography />
                <SocialContainer>
                    <Friends token={ token } id={ Number(id) } />
                </SocialContainer>
            </ContentContainer>
        </PageContainer>
    );
}
