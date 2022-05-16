import styled from 'styled-components';

// import Select from 'react-select';

const Form = styled.form`
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 0 auto;
`;

const Title = styled.h2`
    color: #ffffff;
    font-size: 24px;
    text-align: center;

    margin-bottom: 10px;
    padding: 0 20px;
`;

const Input = styled.input`
    width: 80vw;
    height: 80px;

    color: #ffffff;
    font-size: 22px;

    margin-bottom: 10px;
    padding: 0 20px;

    background-color: #161616;
    border-radius: 30px;
    border: 1px solid #ed2590;
    
    outline: 0;

    &::placeholder {
        color: rgba(2555, 255, 255, 0.6);
    }

    @media (min-width: 611px) {
        width: 30vw;
    }
`;

const ButtonSubmit = styled.button`
    width: 50vw;
    height: 65px;

    color: #ffffff;
    font-size: 22px;
    line-height: 33px;

    background-color: #ed2590;

    margin-bottom: 10px;
    padding: 0 20px;

    border-radius: 30px;

    @media (min-width: 611px) {
        width: 30vw;
    }
`;

const Redirect = styled.span`
    width: 80vw;

    color: rgba(237, 37, 144, 0.8);
    
    font-size: 17px;
    line-height: 20px;
    text-align: center;
    text-decoration: underline;

    margin-bottom: 10px;
    padding: 0 20px;

    border-radius: 6px;

    @media (min-width: 611px) {
        width: 30vw;
    }
`;

export {
    Form,
    Title,
    Input,
    ButtonSubmit,
    Redirect
};
