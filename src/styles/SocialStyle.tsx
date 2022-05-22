import styled from "styled-components";
import { BsThreeDots } from 'react-icons/bs';

const SocialContainer = styled.div`
    width: 20vw;
    /* height: 70vh; */

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    /* margin: 160px auto; */

    /* position: relative; */
`;

const TitleCard = styled.div`
    width: 20vw;
    height: 50vh;
    
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #202020;
    border-radius: 30px;

    padding: 20px;
`;

const SocialCard = styled.div`
    width: 20vw;
    height: 50vh;
    
    text-align: center;
    color: #ffffff;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    background-color: #202020;
    border-radius: 30px;

    padding: 20px;
`;

const SocialHeader = styled.div`
    width: 100%;
    height: 5vh;
    
    text-align: center;
    line-height: 21px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 20px;

    h5 {
        font-size: 1em;
    }

    span {
        color: #ed2590;
        font-size: 0.6rem;
    }
`;

const AvatarImagesCard = styled.div`
    width: 100%;
    height: 40vh;
    
    text-align: center;
    line-height: 21px;

    display: grid;
    grid-template-columns: 27% 27% 27%;
    gap: 20px;

    a {
        all: unset;
    }

    h5 {
        font-size: 1em;
    }

    span {
        color: #ed2590;
        font-size: 0.6rem;

        cursor: pointer;
    }
`;

const InfoSocialStyle = styled.div`
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    h6 {
        font-size: 0.6em;
    }
`;

const AvatarImage = styled.img`
    width: 5vw;
    height: 5vw;

    border-radius: 50%;

    cursor: pointer;
`;

const ThreeDotsIcon = styled(BsThreeDots)`
    color: #ed2590;
    font-size: 2rem;

    margin: 1.5vw;

    cursor: pointer;
`;

export {
    SocialContainer,
    TitleCard,
    SocialCard,
    SocialHeader,
    AvatarImagesCard,
    InfoSocialStyle,
    AvatarImage,
    ThreeDotsIcon
};
