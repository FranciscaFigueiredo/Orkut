import { MouseEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { ButtonMenu, ButtonsContainer, MenuContainer } from '../styles/HeaderStyle';

interface PropsMenu {
    setMenu: number;
}

export default function HeaderMenu({ setMenu }: PropsMenu) {
    const navigate = useNavigate();

    const { logout } = useAuth();

    const handleMenuEvent = (event: MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        setMenu(0);
    };

    const handleLogoutEvent = (event: MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        logout();
        navigate('/');
    };

    // function logoutUser() {
    //     // logout({ token })
    //     //     .catch((err) => console.error());
    //     // setUser(null);
    //     // sessionStorage.clear();
    //     // navigate('/');
    // }

    return (
        <MenuContainer onClick={ handleMenuEvent }>
            <ButtonsContainer>
                <ButtonMenu>
                    <Link to={ `/users/${1}` }>
                        Perfil
                    </Link>
                </ButtonMenu>

                <ButtonMenu onClick={ handleLogoutEvent }>Logout</ButtonMenu>
            </ButtonsContainer>
        </MenuContainer>
    );
}
