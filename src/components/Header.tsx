import { SetStateAction, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { getUsersByName } from '../services/orkut';
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

export interface PropsUserInfo {
    id?: number;
    username: string | null;
    avatar: string | null;
}

export function Header({ username, avatar }: PropsUserInfo) {
    const [menu, setMenu] = useState<SetStateAction<boolean>>(false);
    const [search, setSearch] = useState('');
    const [usersList, setUsersList] = useState([]);

    const { token } = useAuth();

    useEffect(() => {
        if (search.length > 2) {
            getUsersByName(token, search)
                .then((res) => setUsersList(res.data))
                .catch(() => console.error());
        }

        if (search.length <= 2) {
            setUsersList([]);
        }
    }, [search]);

    console.log(usersList);

    return (
        <HeaderContainer>
            <HeaderContent>
                <Link to="/home">
                    <LogoContainer>
                        <LogoImage src={ logo } alt="logo orkut" />
                    </LogoContainer>
                </Link>

                <MenuActions>
                    <Link to="/home">
                        <BackgroundCardIcon>
                            <HomeIcon />
                        </BackgroundCardIcon>
                    </Link>

                    <BackgroundCard>
                        <SearchIcon />
                        <Search
                            type="text"
                            placeholder="Pesquisar no Orkut"
                            required
                            value={ search }
                            onChange={ (event) => setSearch(event.target.value) }
                        />
                    </BackgroundCard>
                </MenuActions>

                <Menu onClick={ () => setMenu(!menu) }>
                    <ImageProfile src={ avatar } alt="image profile" />
                    <Username>{ username }</Username>
                    <ArrowMenu menu={ menu } />
                </Menu>
                {/* {
                    user ?
                        <Logout onClick={ logoutUser } />
                    : ''
                } */}
            </HeaderContent>
            {menu ? (
                <HeaderMenu setMenu={ setMenu } token={ token } />
            ) : (
                ''
            )}
        </HeaderContainer>
    );
}
