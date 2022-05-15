import { useNavigate } from 'react-router-dom';
import { HeaderContainer } from '../styles/ContainerStyle';
import { BackgroundCard, Home, Logout, TitleApplication } from '../styles/HeaderStyle';

export function Header(): JSX.Element {
    const navigate = useNavigate();

    // function logoutUser() {
    //     setUser(null);
    //     sessionStorage.clear();
    //     navigate('/');
    // }

    return (
        <HeaderContainer>
            <TitleApplication>Orkut</TitleApplication>
            <BackgroundCard>
                <Home />
            </BackgroundCard>
            {/* {
                user ?
                    <Logout onClick={ logoutUser } />
                : ''
            } */}
        </HeaderContainer>
    );
}
