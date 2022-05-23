import React, { SetStateAction } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { ButtonMenu, ButtonsContainer, MenuContainer } from '../styles/HeaderStyle';

interface PropsMenu {
    setMenu: SetStateAction<boolean>;
}

export default function HeaderMenu({ setMenu }: PropsMenu) {
    const navigate = useNavigate();

    const { logout } = useAuth();

    const handleMenuEvent = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        setMenu(false);
    };

    const handleLogoutEvent = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        logout();
        navigate('/');
    };

    return (
        <MenuContainer onClick={ handleMenuEvent }>
            <ButtonsContainer>
                <ButtonMenu>
                    <Link to={ `/home` }>
                        Perfil
                    </Link>
                </ButtonMenu>

                <ButtonMenu onClick={ handleLogoutEvent }>Logout</ButtonMenu>
            </ButtonsContainer>
        </MenuContainer>
    );
}
