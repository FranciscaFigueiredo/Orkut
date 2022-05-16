import styled from "styled-components";

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

const FriendsCard = styled.div`
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


export {
    SocialContainer,
    TitleCard,
    FriendsCard,
};
