/* eslint-disable import/no-extraneous-dependencies */
import styled from 'styled-components';
import { VscFilePdf } from 'react-icons/vsc';
import { IoLogOutOutline } from 'react-icons/io5';
import { RiHome5Fill, RiSearchLine } from 'react-icons/ri';
import { IoIosArrowDown } from 'react-icons/io';

interface ArrowProps {
    menu: boolean;
}

const HeaderContent = styled.header`
    width: 85vw;
    height: 130px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: rgba(22, 22, 22, 0.9);

    margin: 0 auto;
`;

const LogoContainer = styled.div`
    min-width: 15vw;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const LogoImage = styled.img`
    width: 100px;
    height: 34px;

    text-align: center;

    cursor: pointer;
`;

const BackgroundCardIcon = styled.div`
    width: 80px;
    height: 80px;

    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    background-color: #202020;

    cursor: pointer;
`;

const BackgroundCard = styled.div`
    width: fit-content;
    height: fit-content;

    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 30px;
    background-color: #202020;

    padding: 10px 15px;
`;

const HomeIcon = styled(RiHome5Fill)`
    color: #ccccd2;
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    line-height: 32px;
    text-align: center;

    cursor: pointer;
`;

const TitleIcon = styled(VscFilePdf)`
    color: #3f61d7;
    font-size: 36px;
    font-weight: bold;
    text-align: center;

    cursor: pointer;
`;

const Logout = styled(IoLogOutOutline)`
    color: #3f61d7;
    font-size: 36px;
    font-weight: bold;
    text-align: center;

    cursor: pointer;
`;

const SearchIcon = styled(RiSearchLine)`
    height: 55px;

    color: #888888;
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    line-height: 32px;
    text-align: center;

    cursor: pointer;
`;

const MenuActions = styled.div`
    width: 40vw;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Menu = styled.div`
    width: 20vw;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

   cursor: pointer;
`;

const ImageProfile = styled.img`
    width: 50px;
    height: 50px;

    border-radius: 50%;

    margin-right: 20px;
`;

const ArrowMenu = styled(IoIosArrowDown)<ArrowProps>`
    color: #ffffff;

    transform: ${(props) => props.menu ? 'rotate(180deg)' : ''};

    cursor: pointer;

    margin: 0 15px;
`;

const MenuContainer = styled.div`
	width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
	justify-content: flex-start;

    position: absolute;
    left: 0;
    top: 130px;
    z-index: 10;

    cursor: pointer;

    a {
        all: unset;
    }
`;

const ButtonsContainer = styled.div`
    height: 100px;

    display: flex;
    flex-direction: column;
    align-items: center;
	justify-content: flex-start;

    position: absolute;
    right: 7.5vw;
    top: 0;

    cursor: pointer;

    a {
        all: unset;
    }
`;

const ButtonMenu = styled.button`
    width: 20vw;
    height: 45px;

    color: #ffffff;
    font-size: 17px;
    font-weight: bold;

    background-color: rgba(237, 37, 144, 0.4);

    cursor: pointer;

    &:last-child {
        border-end-start-radius: 20px;
        border-bottom-right-radius: 20px;
    }

    &:first-child {
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    }

    &:hover {
        background-color: #ed2590;
    }
`;

const Username = styled.span`
    color: rgb(255, 255, 255);
    font-size: 1rem;
    font-weight: bold;
    text-align: left;
    line-height: 1.5rem;
    text-align: center;

    cursor: pointer;
`;

export {
    HeaderContent,
    LogoContainer,
    LogoImage,
    BackgroundCardIcon,
    BackgroundCard,
    HomeIcon,
    TitleIcon,
    Logout,
    SearchIcon,
    MenuActions,
    Menu,
    ImageProfile,
    ArrowMenu,
    MenuContainer,
    ButtonsContainer,
    ButtonMenu,
    Username,
};
