import { Header } from '../components/Header';

import { PageContainer } from '../styles/ContainerStyle';

export function Home(): JSX.Element {
    // const navigate = useNavigate();

    // const user = JSON.parse(`${sessionStorage.getItem('user')}`);
    // const { token } = user;

    return (
        <PageContainer>
            <Header />
        </PageContainer>
    );
}

