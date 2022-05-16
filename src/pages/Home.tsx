import { Biography } from '../components/Biography';
import { Friends } from '../components/Friends';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';

import { ContentContainer, PageContainer } from '../styles/ContainerStyle';
import { SocialContainer } from '../styles/SocialStyle';

export function Home() {
    // const navigate = useNavigate();

    // const user = JSON.parse(`${sessionStorage.getItem('user')}`);
    // const { token } = user;

    return (
        <PageContainer>
            <Header />
            <ContentContainer>
                <Sidebar />
                <Biography />
                <SocialContainer>
                    <Friends />
                </SocialContainer>
            </ContentContainer>
        </PageContainer>
    );
}
