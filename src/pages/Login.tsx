import { AxiosResponse } from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';
import { postLogin } from '../services/orkut';
import logo from '../styles/orkut.png';

import { PageContainer } from '../styles/ContainerStyle';
import {
    ButtonSubmit,
    Form,
    Input,
    Redirect,
    Title,
} from '../styles/FormStyle';
import { LogoContainer, LogoImage } from '../styles/HeaderStyle';
import { Line } from '../styles/NavigationMenuStyle';
import { AuthCard } from '../styles/AuthStyle';
import ModalError from '../shared/ModalError';
import ModalSuccess from '../shared/ModalSuccess';

export function Login() {
    const navigate = useNavigate();

    const [disable, setDisable] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { token, login } = useAuth();

    const [modalError, setModalError] = useState(false);
    const [modalSuccess, setModalSuccess] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    if (token) {
        navigate('/home');
    }

    function redirectLogin(res: AxiosResponse<any, any>) {
        login(res.data);

        setTimeout(() => {
            navigate('/home');
        }, 1000);
    }

    const handleLoginEvent = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setDisable(true);

        postLogin({
            email,
            password,
        })
            .then((res) => {
                setModalMessage('Login com sucesso!');
                setModalSuccess(true);
                redirectLogin(res);
            })
            .catch((err) => {
                console.error();

                setPassword('');
                setDisable(false);

                if (err.response.status === 400) {
                    setModalMessage('Dica: A senha deve ter 6 dígitos ou mais');
                    setModalError(true);
                }

                if (err.response.status === 401) {
                    setEmail('');
                    setModalMessage('Email ou senha inválidos');
                    setModalError(true);
                }

                if (err.response.status === 500) {
                    setModalMessage('Servidor fora de área, tente novamente mais tarde');
                    setModalError(true);

                    setTimeout(() => {
                        navigate('/');
                    }, 2000);
                }
            });
    };

    return (
        <PageContainer>
            <LogoContainer>
                <LogoImage src={ logo } alt="logo orkut" />
            </LogoContainer>
            <Line />
            <AuthCard>
                <Title>Login</Title>
                <Form onSubmit={ handleLoginEvent }>
                    <Input
                        type="email"
                        placeholder="email"
                        disabled={ disable }
                        required
                        value={ email }
                        onChange={ (event) => setEmail(event.target.value) }
                    />
                    <Input
                        type="password"
                        placeholder="password"
                        disabled={ disable }
                        required
                        value={ password }
                        onChange={ (event) => setPassword(event.target.value) }
                    />
                    <ButtonSubmit disabled={ disable }>Entrar</ButtonSubmit>
                    <Link to="/sign-up">
                        <Redirect>Ainda não é membro? Entrar já!</Redirect>
                    </Link>
                </Form>
            </AuthCard>
            {
                modalError
                    ? <ModalError message={ modalMessage } setModal={ setModalError } />
                    : ''
            }

            {
                modalSuccess
                    ? <ModalSuccess message="" />
                    : ''
            }
        </PageContainer>
    );
}
