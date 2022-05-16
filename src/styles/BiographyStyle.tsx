import styled from 'styled-components';

import { RiUser3Fill } from 'react-icons/ri';
import { BsHeartFill, BsImageAlt } from 'react-icons/bs';
import { RiGamepadFill } from 'react-icons/ri'

const BioDescription = styled.div`
    width: 40vw;
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

const HeartCool = styled(BsHeartFill)`
    color: #25cbff;
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    line-height: 32px;
    text-align: center;

    cursor: pointer;
`;

const HeartSexy = styled(BsHeartFill)`
    color: #ed2590;
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    line-height: 32px;
    text-align: center;

    cursor: pointer;
`;

export {
    BioDescription,
    HeartCool,
    HeartSexy,
}