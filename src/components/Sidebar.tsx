import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { getUserRequests, postFriendshipRequest } from '../services/orkut';
import { HomeIcon } from '../styles/HeaderStyle';
import {
    About,
    Button,
    ButtonAddFriend,
    ButtonsCard,
    CircleStyle,
    GameIcon,
    Heart,
    ImageIcon,
    ImageProfile,
    Line,
    SidebarProfile,
    UserDescription,
    UserIcon,
    Username,
} from '../styles/MenuActionsStyle';

interface UserSidebar {
    friendship: boolean;
    username: string;
    avatar: string;
}

export function Sidebar({ friendship, username, avatar }: UserSidebar) {
    const { token, username: userLog } = useAuth();
    const { id } = useParams();

    const [request, setRequest] = useState(false);

    const handleInviteEvent = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        postFriendshipRequest(token, Number(id))
            .then(() => setRequest(true))
            .catch(() => console.error());
    };

    useEffect(() => {
        getUserRequests(token, Number(id))
            .then((res) => (res.data ? setRequest(true) : setRequest(false)))
            .catch(() => console.error());
    }, []);

    return (
        <SidebarProfile>
            <CircleStyle>
                <ImageProfile src={ avatar } alt="image profile" />
            </CircleStyle>
            <UserDescription>
                <Username>{ username }</Username>
                <About>feminino, namorando</About>
                <About>Bahia - Brasil</About>
            </UserDescription>
            {
                userLog !== username
                    ? (
                        <ButtonsCard>
                            {
                                !friendship
                                    ? (
                                        <ButtonAddFriend
                                            disabled={ request }
                                            onClick={ handleInviteEvent }
                                        >
                                            {
                                                !request
                                                    ? 'Enviar convite'
                                                    : 'Convite enviado'
                                            }
                                        </ButtonAddFriend>
                                    )
                                    : ''
                            }
                        </ButtonsCard>
                    )
                    : ''
            }
            <Line />
            <ButtonsCard>
                <Button>
                    <HomeIcon />
                    Início
                </Button>
                <Button>
                    <UserIcon />
                    Adicionar
                </Button>
                <Button>
                    <Heart />
                    Depoimentos
                </Button>
                <Button>
                    <ImageIcon />
                    Galeria
                </Button>
                <Button>
                    <GameIcon />
                    Jogos
                </Button>
            </ButtonsCard>
        </SidebarProfile>
    );
}
