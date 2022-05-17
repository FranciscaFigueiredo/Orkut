import { MouseEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ButtonMenu, ButtonsContainer, MenuContainer } from "../styles/HeaderStyle";

interface PropsMenu {
    setMenu: boolean;
    token: string;
}

export default function MenuActions({ setMenu, token }: PropsMenu) {
    // const { token } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleMenuEvent = (event: MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
    }

    const handleLogoutEvent = (event: MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        navigate('/');
    }

    // function logoutUser() {
    //     // logout({ token })
    //     //     .catch((err) => console.error());
    //     // setUser(null);
    //     // sessionStorage.clear();
    //     // navigate('/');
    // }

    return (
        <MenuContainer onClick={ handleMenuEvent } >
            <ButtonsContainer>
                <ButtonMenu>
                    <Link to='/explore' >
                        Explore
                    </Link>
                </ButtonMenu>

                <ButtonMenu>
                    <Link to={`/users/${1}`} >
                        Profile
                    </Link>
                </ButtonMenu>

                <ButtonMenu onClick={ handleLogoutEvent }>Logout</ButtonMenu>
            </ButtonsContainer>
        </MenuContainer>
    );
}