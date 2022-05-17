import styled from 'styled-components';

import { RiUser3Fill } from 'react-icons/ri';
import { BsHeartFill, BsImageAlt } from 'react-icons/bs';
import { RiGamepadFill } from 'react-icons/ri'

const SidebarProfile = styled.div`
    width: 15vw;
    height: 75vh;
    
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #202020;
    border-radius: 30px;

    padding: 20px 5px;
`;

const CircleStyle = styled.div`
    width: fit-content;
    height: fit-content;

    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;

    /* border-style: outset; */
    border-radius: 50%;
    background: linear-gradient(152deg, rgba(252,70,107,0.8631827731092436) 0%, rgba(63,94,251,0.9528186274509804) 100%);

    margin: 0 auto;
    padding: 3px;
`;

const ImageProfile = styled.img`
    width: 7vw;
    height: 7vw;

    border-radius: 50%;
    border: 3px inset #000000;

    margin: 0 auto;
`;

const ProfileDescription = styled.div`
    width: 80%;
    height: 5vw;

    border: 1px solid #444444;

    margin: 30px 0;
`;

const UserDescription = styled.div`
    width: 80%;
    height: 5vw;

    margin: 30px 0;
`;

const Username = styled.h2`
    max-width: 10vw;
    color: #ffffff;

    font-size: 22px;
    line-height: 24px;

    overflow: hidden;

    margin: 15px auto;

    text-overflow: ellipsis;
    white-space: nowrap;
`;

const About = styled.h4`
    color: #888888;

    font-size: 12px;
    line-height: 18px;
    text-align: center;

    overflow: hidden;

    margin: 5px auto;

    text-overflow: ellipsis;
    white-space: nowrap;
`;

const Line = styled.div`
    width: 80%;
    height: 1px;

    border: 1px solid #444444;

    margin: 30px auto;
`;

const ButtonsCard = styled.div`
    /* all: unset; */
    width: 80%;
    height: 50%;
    
    /* text-align: left; */

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    /* background-color: #202020;
    border-radius: 30px; */
    margin: 0 auto;
`;

const Button = styled.button`
    all: unset;
    width: 100%;
    height: 45px;
    
    color: #ffffff;
    font-size: 14px;
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    
    border-radius: 30px;

    padding: 10px;

    svg {
        margin-right: 10px;
    }

    &:hover {
        background-color: #161616;
    }
`;

const UserIcon = styled(RiUser3Fill)`
    mask-image: linear-gradient(180deg, rgba(204,204,210,0.4) 56%, rgba(204,204,210,1) 56%);
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    line-height: 32px;
    text-align: center;

    cursor: pointer;
`;

const Heart = styled(BsHeartFill)`
    color: #ccccd2;
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    line-height: 32px;
    text-align: center;

    cursor: pointer;
`;

const ImageIcon = styled(BsImageAlt)`
    color: #161616;
    background-color: #ccccd2;
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    text-align: center;

    border-radius: 8px;
    padding: 2px;

    cursor: pointer;
`;

const GameIcon = styled(RiGamepadFill)`
    color: #ccccd2;
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    line-height: 32px;
    text-align: center;

    cursor: pointer;
`;

export {
    SidebarProfile,
    CircleStyle,
    ImageProfile,
    ProfileDescription,
    Username,
    UserDescription,
    About,
    Line,
    ButtonsCard,
    Button,
    UserIcon,
    Heart,
    ImageIcon,
    GameIcon,
};