import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../Componetes/Header/Header';
import BannerUsuario from '../../Componetes/BannerHome/BannerUsuario';
import CarteiraUsuario from '../../Componetes/CarteiraUsuario/CarteiaUsuario';
import { Container } from './HomeusuarioStyles';
import Analises from '../../Componetes/Analises/Analises';

function HomeUsuario() {
    return (
        <Container>
            <Header />
            <BannerUsuario />
            <CarteiraUsuario />
            <Analises />
        </Container>
    );
}

export default HomeUsuario;
