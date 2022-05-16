import { AxiosResponse } from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
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

export function Login() {
    const navigate = useNavigate();

    const [disable, setDisable] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { login } = useAuth();

    // if (user) {
    //     navigate('/home');
    // }

    function redirectLogin(res: AxiosResponse<any, any>) {
        // setToken(res.data.token);

        const user = JSON.stringify(res.data);
        sessionStorage.setItem('user', user);
        // setUser(user);

        setTimeout(() => {
            navigate('/home');
        }, 1000);
    }

    function sendLogin(event: { preventDefault: () => void; }) {
        event.preventDefault();
        setDisable(true);

        postLogin({
            email,
            password,
        })
            .then((res) => {
                alert('Login com sucesso!');
                redirectLogin(res);
            })
            .catch((err) => {
                console.error();

                setPassword('');
                setDisable(false);

                if (err.response.status === 400) {
                    alert('Digite dados válidos');
                }

                if (err.response.status === 401) {
                    setEmail('');
                    alert(err.response.data);
                }

                if (err.response.status === 500) {
                    alert(
                        'Servidor fora de área, tente novamente mais tarde'
                    );

                    setTimeout(() => {
                        navigate('/');
                    }, 2000);
                }
            });
    }

    return (
        <PageContainer>
            <LogoContainer>
                <LogoImage src={logo} alt="logo orkut" />
            </LogoContainer>
            <Line />
            <AuthCard>
                <Title>Login</Title>
                <Form onSubmit={sendLogin}>
                    <Input
                        type="email"
                        placeholder="email"
                        disabled={disable}
                        required
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <Input
                        type="password"
                        placeholder="password"
                        disabled={disable}
                        required
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <ButtonSubmit disabled={disable}>Entrar</ButtonSubmit>
                    <Link to="/sign-up">
                        <Redirect>Ainda não é membro? Entrar já!</Redirect>
                    </Link>
                </Form>
            </AuthCard>
        </PageContainer>
    );
}