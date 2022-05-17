import styled from 'styled-components';

const MenuContainer = styled.div`
    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 170px auto 30px;

    position: relative;
`;

const Search = styled.input`
    all: unset;
    width: 25vw;
    height: 55px;

    color: #888888;
    font-size: 14px;
    line-height: 18px;
    text-align: left;

    padding: 0 20px;

    outline: 0;

    &::placeholder {
        color: #888888;
    }
`;

const Line = styled.div`
    width: 60vw;
    height: 1px;

    border: 1px solid #ed2590;

    margin: 50px auto;
`;

const Button = styled.button`
    all: unset;

    height: 40px;

    border-radius: 4px;
    border: 1px solid rgba(25, 118, 210, 0.6);
    box-sizing: border-box;
    
    padding: 10px;

    cursor: pointer;
`;

const ButtonsContainer = styled.div`
    width: 70vw;
    height: 36px;

    display: flex;
    align-items: center;
    justify-content: space-around;

    margin: 0 auto;

    position: relative;
`;

export {
    MenuContainer,
    Search,
    Line,
    Button,
    ButtonsContainer,
};
