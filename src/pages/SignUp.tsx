import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { postSignUp } from '../services/orkut';
import ModalError from '../shared/ModalError';
import ModalSuccess from '../shared/ModalSuccess';
import { AuthCard } from '../styles/AuthStyle';
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

import logo from '../styles/orkut.png';

export default function SignUp() {
    const navigate = useNavigate();

    const [disable, setDisable] = useState(false);

    const [username, setUsername] = useState('');
    const [avatar, setAvatar] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [modalError, setModalError] = useState(false);
    const [modalSuccess, setModalSuccess] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const handleSignUpEvent = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setDisable(true);

        postSignUp({
            username,
            avatar,
            email,
            password,
        })
            .then(() => {
                setModalMessage('Cadastro realizado com sucesso!');
                setModalSuccess(true);
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            })
            .catch((err) => {
                console.error();

                setPassword('');
                setDisable(false);

                if (err.response.status === 400) {
                    setModalMessage('Digite dados válidos!');
                    setModalError(true);
                }

                if (err.response.status === 409) {
                    setEmail('');
                    setUsername('');
                    setModalMessage('Usuário já existente');
                    setModalError(true);
                }

                if (err.response.status === 500) {
                    setModalMessage('Servidor fora de área, tente novamente mais tarde');
                    setModalError(true);
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
                <Title>Sign Up</Title>
                <Form onSubmit={ handleSignUpEvent }>
                    <Input
                        type="text"
                        placeholder="username"
                        disabled={ disable }
                        required
                        id="name"
                        value={ username }
                        onChange={ (event) => setUsername(event.target.value) }
                    />
                    <Input
                        type="url"
                        placeholder="avatar"
                        disabled={ disable }
                        required
                        id="name"
                        value={ avatar }
                        onChange={ (event) => setAvatar(event.target.value) }
                    />
                    <Input
                        type="email"
                        placeholder="email"
                        disabled={ disable }
                        required
                        id="email"
                        value={ email }
                        onChange={ (event) => setEmail(event.target.value) }
                    />
                    <Input
                        type="password"
                        placeholder="senha"
                        disabled={ disable }
                        required
                        id="password"
                        value={ password }
                        onChange={ (event) => setPassword(event.target.value) }
                    />

                    <ButtonSubmit disabled={ disable }>Cadastrar</ButtonSubmit>
                    <Link to="/">
                        <Redirect>Já é membro? Voltar para a tela de login</Redirect>
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
