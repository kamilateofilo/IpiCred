import { Title, Container, Image } from './BancosStyles'; // Importe os estilos

import BancoBrasil from '../../assets/bancoBB.png';
import Caixa from '../../assets/bancoCaixa.png';
import Santander from '../../assets/bancoSantander.png';
import Sicredi from '../../assets/bancoSicred.png';

const Bancos = () => {
    return (
        <>
            <Title>Bancos que liberam mais crédito com a gente</Title>

            <Container>
                <Image src={BancoBrasil} alt="Banco do Brasil" />
                <Image src={Caixa} alt="Caixa Econômica Federal" style={{width: '150px', height: '38px'}} />
                <Image src={Santander} alt="Santander" style={{width: '190px', height: '38px'}} />
                <Image src={Sicredi} alt="Sicredi" />
            </Container>
        </>
    );
};

export default Bancos;
