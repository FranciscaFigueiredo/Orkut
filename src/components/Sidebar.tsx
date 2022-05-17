import { HomeIcon } from '../styles/HeaderStyle';
import { About, Button, ButtonsCard, CircleStyle, GameIcon, Heart, ImageIcon, ImageProfile, Line, SidebarProfile, UserDescription, UserIcon, Username } from '../styles/MenuActionsStyle';

export function Sidebar() {
    const avatar = 'https://http.cat/422.jpg';

    return (
        <SidebarProfile>
            <CircleStyle>
                <ImageProfile src={avatar} alt="image profile"/>
            </CircleStyle>
            <UserDescription>
                <Username>Francisca</Username>
                <About>feminino, namorando</About>
                <About>Bahia - Brasil</About>
            </UserDescription>
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
