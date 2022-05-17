import { SetStateAction, useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { HeaderContainer } from '../styles/ContainerStyle';
import {
    ArrowMenu,
    BackgroundCard,
    BackgroundCardIcon,
    HeaderContent,
    HomeIcon,
    ImageProfile,
    LogoContainer,
    LogoImage,
    Menu,
    MenuActions,
    SearchIcon,
    Username,
} from '../styles/HeaderStyle';

import { Search } from '../styles/NavigationMenuStyle';
import logo from '../styles/orkut.png';
import HeaderMenu from './HeaderMenu';

interface Props {
    username: string;
    avatar: string;
}

export function Header({ username, avatar }: Props) {
    interface MenuInterface {
        success: boolean;
        message: string;
    }
    const [menu, setMenu] = useState<SetStateAction<0 | MenuInterface>>(0);

    const { token } = useContext(AuthContext);

    return (
        <HeaderContainer>
            <HeaderContent>
                <LogoContainer>
                    <LogoImage src={logo} alt="logo orkut" />
                </LogoContainer>

                <MenuActions>
                    <BackgroundCardIcon>
                        <HomeIcon />
                    </BackgroundCardIcon>
                    <BackgroundCard>
                        <SearchIcon />
                        <Search placeholder="Pesquisar no Orkut" />
                    </BackgroundCard>
                </MenuActions>

                <Menu onClick={() => setMenu(!menu)}>
                    <ImageProfile src={avatar} alt="image profile" />
                    <Username>{ username }</Username>
                    <ArrowMenu menu={menu} />
                </Menu>
                {/* {
                    user ?
                        <Logout onClick={ logoutUser } />
                    : ''
                } */}
            </HeaderContent>
            {menu ? (
                <HeaderMenu setMenu={setMenu} token={token} />
            ) : (
                ''
            )}
        </HeaderContainer>
    );
}
