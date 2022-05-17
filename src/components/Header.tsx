import { SetStateAction, useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { HeaderContainer } from '../styles/ContainerStyle';
import { ArrowMenu, BackgroundCard, BackgroundCardIcon, HeaderContent, HomeIcon, ImageProfile, LogoContainer, LogoImage, Menu, MenuActions, SearchIcon } from '../styles/HeaderStyle';
import { Search } from '../styles/NavigationMenuStyle';
import logo from '../styles/orkut.png';

export function Header() {
    const avatar = 'https://http.cat/422.jpg';

    interface MenuInterface {
        success: boolean;
        message: string;
    }
    const [menu, setMenu] = useState<SetStateAction<false | MenuInterface>>(false);
    
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
                    <ImageProfile src={avatar} alt="image profile"/>
                    <ArrowMenu menu={menu} />
                </Menu>
                {menu ? (
                    <MenuActions setMenu={setMenu} token={token} />
                ) : (
                    ''
                )}
                {/* {
                    user ?
                        <Logout onClick={ logoutUser } />
                    : ''
                } */}
            </HeaderContent>
        </HeaderContainer>
    );
}
