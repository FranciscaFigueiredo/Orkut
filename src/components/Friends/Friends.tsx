import { useState } from 'react';
import { useEffect } from 'react';
import { getUserFriends } from '../../services/orkut';
import { AvatarImagesCard, SocialCard, SocialHeader, ThreeDotsIcon } from '../../styles/SocialStyle';
import { Friend } from './Friend';

type FriendObject = {
    id: number;
    username: string;
    avatar: string;
}

interface FriendData {
    friend: FriendObject;
}

export function Friends({ token, id }: { token: string | null, id: number }) {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        getUserFriends(token, id)
            .then((res) => setFriends(res.data))
            .catch(() => console.error());
    }, []);

    console.log(friends, id);
    

    return (
        <SocialCard>
            <SocialHeader>
                <h5>Amigos</h5>
                <span>Ver mais</span>
            </SocialHeader>
            <AvatarImagesCard>
            {
                friends.length ?
                    friends.map((friend: FriendData, index: number) => <Friend key={ index } id={ friend.friend.id } username={ friend.friend.username } avatar={ friend.friend.avatar } /> )
                : ''
            }
            
            </AvatarImagesCard>
            {
                friends.length > 9 ?
                    <ThreeDotsIcon />
                : <span>Encontre novos amigos!</span>
            }
        </SocialCard>
    );
}
