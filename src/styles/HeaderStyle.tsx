import styled from 'styled-components';
import { VscFilePdf } from 'react-icons/vsc';
import { IoLogOutOutline } from 'react-icons/io5';
import { RiHome5Fill } from 'react-icons/ri';

const BackgroundCard = styled.div`
    width: fit-content;
    height: fit-content;

    border-radius: 50%;
    background-color: #202020;
    
`;

const Home = styled(RiHome5Fill)`
    color: #ccccd2;
    font-size: 36px;
    font-weight: bold;
    text-align: center;

    cursor: pointer;
`;

const TitleApplication = styled.h1`
    display: inline-block;
    font-size: 36px;
	font-weight: bold;
    text-align: center;
    
	background: linear-gradient(90deg, rgba(0,0,0,1) 50%, rgba(63,97,215,1) 50%);
	background-clip: text;
	-webkit-background-clip: text;
	color: transparent;

    display : flex;
    align-items : center;
    justify-content : center;

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

export {
    BackgroundCard,
    Home,   
    TitleApplication,
    TitleIcon,
    Logout,
};
