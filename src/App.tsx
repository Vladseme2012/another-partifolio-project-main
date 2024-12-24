import styled from 'styled-components';
import './App.css';
import person from '../src/assets/images/photo_@1x.webp';
import { theme } from './styles/Theme';

function App() {
    return (
        <div className="App">
            <Container>
                <ImageWrapper>
                    <Image src={person} alt={'text'} />
                </ImageWrapper>
            </Container>
        </div>
    );
}

export default App;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1400px;
    width: 100%;
    height: 100vh;
    background: ${theme.colors.secondary};
`;

const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    max-width: 486px;
    width: 100%;
    min-height: 486px;
    overflow: hidden;

    &::before {
        display: inline-block;
        position: absolute;
        content: '';
        top: 80px;
        width: 486px;
        height: 486px;
        border-radius: 50%;
        background: ${theme.colors.primary};
    }
`;

const Image = styled.img`
    position: absolute;
    top: 41px;
    right: 0;
    max-width: 100%;
    object-fit: cover;
`;
