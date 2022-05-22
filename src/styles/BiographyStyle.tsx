import styled from 'styled-components';

import { BsHeartFill, BsEmojiLaughingFill } from 'react-icons/bs';
import { GrStar } from 'react-icons/gr';

const BioDescription = styled.div`
    width: 40vw;
    height: 75vh;
    
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    background-color: #202020;
    border-radius: 30px;

    padding: 30px;
`;

const StatusDescription = styled.div`
    width: 100%;
    
    color: #888888;
    text-align: left;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Fields = styled.div`
    width: 100%;
    
    color: #888888;
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: space-between;
    
    margin: 10px;

    &:nth-child(2) {
        color: #ffffff;
    }
`;

const Field = styled.div`
    width: 15%;
    
    text-align: left;
    line-height: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    span {
        margin-left: 5px;
    }
`;

const TitleBio = styled.h3`
    color: #ffffff;
    font-size: 1.7rem;
    text-align: center;
    align-self: flex-start;

    margin-bottom: 30px;
`;

const StarIcon = styled(GrStar)`
    color: #ffd02c;
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.5rem;
    text-align: center;

    cursor: pointer;
`;

const SmileIcon = styled(BsEmojiLaughingFill)`
    color: #ffd02c;
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.5rem;
    text-align: center;

    cursor: pointer;

    margin: 0 2px;
`;

const HeartBlueIcon = styled(BsHeartFill)`
    color: #25cbff;
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.5rem;
    text-align: center;

    cursor: pointer;

    margin: 0 2px;
`;

const HeartPinkIcon = styled(BsHeartFill)`
    color: #ed2590;
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.5rem;
    text-align: center;

    cursor: pointer;

    margin: 0 2px;
`;

const Line = styled.div`
    width: 100%;
    height: 1px;

    border: 1px solid #444444;

    margin: 30px auto;
`;

const DescriptionFields = styled.div`
    width: 100%;
    height: 100%;
    
    color: #888888;
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    
    margin: 10px;

    &:nth-child(2) {
        color: #ffffff;
    }
`;

const LeftFields = styled.div`
    width: 30%;
    height: 100%;
    
    color: #888888;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    
    margin-right: 10px;
`;

const RightFields = styled.div`
    width: 30%;
    height: 100%;
    
    color: #888888;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`;

const FieldDescription = styled.span`
    text-align: left;
    line-height: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export {
    BioDescription,
    StatusDescription,
    Fields,
    Field,
    TitleBio,
    StarIcon,
    SmileIcon,
    HeartBlueIcon,
    HeartPinkIcon,
    Line,
    DescriptionFields,
    LeftFields,
    RightFields,
    FieldDescription,
};
