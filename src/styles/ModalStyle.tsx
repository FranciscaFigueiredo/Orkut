import styled from 'styled-components';

const Modal = styled.div`
    width: 100vw;
    height: 100vh;

    background-color: rgba(32, 32, 32, 0.6);

    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;

    z-index: 10;
`;

const Message = styled.div`
    min-width: 30vw;
    max-width: 50vw;
    min-height: 30vw;
    max-height: 50vw;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    background-color: #202020;
    border: 2px solid rgba(237, 37, 144, 0.15);
    border-radius: 10px;

    box-shadow: 8px 4px 10px rgba(237, 37, 144, 0.15);

    transition: all 0.4s ease 0, 3s;

    margin-top: 100px;
    padding: 20px;

    z-index: 100000;

    h1 {
        color: #ccccd2;
        font-size: 26px;
        text-align: center;

        padding: 20px 0;
    }
`;

const ButtonModal = styled.button`
    all: unset;
    width: 20vw;

    color: #F8F7F3;
    font-size: 36px;
    line-height: 42px;
    font-weight: bold;
    text-align: center;

    background-color:  #252525;
    border-radius: 5px;

    cursor: pointer;

    margin: 10px auto;
`;

export {
    Modal,
    Message,
    ButtonModal,
};
