import styled from 'styled-components';

const PageContainer = styled.div`
    width: 100vw;
    min-height: 80vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 0 auto;

    position: relative;
`;

const ContentContainer = styled.div`
    width: 85vw;
    /* height: 70vh; */

    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    margin: 160px auto;

    /* position: relative; */
`;

const HeaderContainer = styled.div`
    width: 100vw;
    min-height: 130px;

    display: flex;
    align-items: center;
    justify-content: space-around;

    background-color: rgba(22, 22, 22, 0.9);

    margin: 0 auto;

    position: fixed;
    top: 0;
    left: 0;

    z-index: 10;
`;

export {
    PageContainer,
    ContentContainer,
    HeaderContainer,
};
